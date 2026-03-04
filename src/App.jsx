import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Search, 
  ShieldCheck, 
  Camera, 
  Lightbulb, 
  PlayCircle, 
  Smartphone,
  Layers,
  ChevronRight,
  Sparkles,
  AlertTriangle,
  Menu,
  X,
  GitCompare
} from 'lucide-react';

// --- 数据层 ---
const reportData = {
  title: "竞品终端AI特性分析及外发业务启示",
  subtitle: "以三星 S26 系列为例",
  overview: {
    id: 'overview',
    icon: <Sparkles className="w-5 h-5" />,
    title: "摘要与核心洞察",
    summary: `三星 S26 系列完成了从\u201cAI 功能叠加\u201d到\u201c系统级智能体（Agent）\u201d的转变。通过底层整合 Gemini、Perplexity 和 Bixby，AI 成为操作系统的基建。核心变化是：AI 开始主动理解意图，并在后台静默调度 App。`,
    coreInsight: <React.Fragment>对我们的外发业务而言，最值得警惕的是<strong className="text-amber-900 font-extrabold">流量分发逻辑的重构</strong>。用户习惯用自然语言让 AI 办事后，传统的{"\u201C"}桌面点击-打开 App{"\u201D"}链路会被前端的 AI 直接截胡。未来渠道竞争的核心，将从抢占应用商店推荐位，转移到<strong className="text-amber-900 font-extrabold">争夺系统级 Agent 的 API 默认调用权</strong>。</React.Fragment>
  },
  features: [
    {
      id: 'feature-1',
      icon: <Layers className="w-5 h-5" />,
      title: "Agentic AI 跨应用调度",
      badge: "系统级智能体",
      description: `打破 App 孤岛。用户下一句话指令，AI 在安全隔离的虚拟沙箱中，通过 GUI（视觉读屏）和 API 双路径，自动完成多个 App 的切换和操作。`,
      subFeatures: [
        {
          name: "虚拟窗口静默执行",
          desc: `指令示例：\u201c帮我预约去机场的车\u201d。AI 会在后台浮动窗口中自动调用地图定位和打车软件，完成选车等流程，用户只需最后确认支付。`,
          link: "The Verge 视频 4:00 处，演示 Gemini 自动跨应用操作",
          url: "https://www.youtube.com/watch?v=0ZTRxqVhXJo"
        },
        {
          name: "Now Nudge 即时提示",
          desc: "在即时通讯聊天中提到时间，AI 会主动调取日历比对并弹出冲突提示，实现从聊天上下文到系统组件的无缝跳转。",
          link: "官方发布会回放 15:49 处，聊天界面中主动弹出日历",
          url: "https://www.youtube.com/watch?v=SA93zbnoR4U"
        }
      ],
      competitor: `国内厂商虽然也上了跨 App 连招，但在全球生态调用上偏弱。S26 依靠原生谷歌生态，打通了海外高频的出行、外卖 App，且有 AppFunctions 框架做接口标准支撑。`,
      insight: {
        title: "流量入口上移",
        desc: `意图分发正在取代应用分发。如果我们外发的 App 或游戏，底层没有接入各大系统级智能体的标准化拉起接口，在第一波需求转化时就会被系统 AI 过滤。技术层面必须前置做好接口的开放与适配。`
      },
      appendix: {
        title: "附注：当前 Agentic AI 跨应用调度已实测支持的应用列表",
        items: [
          "出行打车类：Uber",
          "外卖与餐饮类：DoorDash、Grubhub",
          "通讯与原生工具类：WhatsApp、Google Maps 及三星原生系统应用（日历、短信、相册等无缝联动）"
        ]
      }
    },
    {
      id: 'feature-2',
      icon: <Search className="w-5 h-5" />,
      title: "高阶调研 (Ask AI)",
      badge: "深度检索",
      description: "集成 Perplexity 引擎，将手机变成主动信息处理终端，解决多线信息整理痛点。",
      subFeatures: [
        {
          name: "跨标签页无缝提炼",
          desc: `原生浏览器中，调用 Ask AI（Hey Plex），可直接对并行打开的多个研报/长文网页进行交叉比对，秒出结构化摘要。`,
          link: "官方发布会回放 45:00 处，跨标签页生成摘要演示",
          url: "https://www.youtube.com/watch?v=SA93zbnoR4U"
        },
        {
          name: "画圈搜索多目标识别",
          desc: "一笔圈选画面里的多件物品（如整套穿搭的衣、裤、鞋），AI 并行处理，一屏内输出所有单品的搜索结果与购买链接。",
          link: "The Verge 精简版视频 2:09 处，多目标识别实机演示",
          url: "https://www.youtube.com/watch?v=0ZTRxqVhXJo"
        }
      ],
      competitor: `苹果的网页总结能力目前仍局限于单页。S26 选择将 Perplexity 提升到系统集成深度，在多源信息的综合研判效率上更具商务优势。`,
      insight: {
        title: "转化链路极度压缩",
        desc: `画圈多目标搜索缩短了\u201c看素材-下载\u201d的链路。在外部渠道投放买量视频或海报时，必须强化我们游戏核心视觉元素的\u201c可识别特征\u201d。玩家看完 CG，随手画个圈就能准确拉起我们的下载卡片，这将颠覆传统的广告落地页漏斗。`
      }
    },
    {
      id: 'feature-3',
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "物理防窥屏与通话过滤",
      badge: "立体隐私防御",
      description: `构建了由\u201c系统沙箱\u201d、\u201cKnox 硬件金库\u201d与屏幕物理结构组成的立体隐私防御体系。`,
      subFeatures: [
        {
          name: "双像素架构防窥屏 (Privacy Display)",
          desc: `硬件级切断宽视角光线。开启后，45度角侧看屏幕几乎全黑。支持特定 App 启动时自动触发防窥。`,
          link: "MKBHD 视频 3:00 处，侧看瞬间变黑极其直观",
          url: "https://www.youtube.com/watch?v=FRI78tq9Eik"
        },
        {
          name: "AI 通话筛选 (Call Screening)",
          desc: "端侧模型自动代接陌生来电，实时转录文字摘要，并对高危话术进行诈骗预警。不上云，纯本地处理。",
          link: "The Verge 视频 2:56 处，展示 Scam Detection 预警界面",
          url: "https://www.youtube.com/watch?v=0ZTRxqVhXJo"
        }
      ],
      competitor: `苹果主打\u201c私有云计算（PCC）\u201d的纯软件级隐私加密；而 S26 采取了更硬核的\u201c物理防御+端侧阻断\u201d策略。业界独家的底层防窥屏硬件，配合数据彻底不上云的端侧 AI 拦截，在政企和高端商务领域的安全定调上更胜一筹。`,
      insight: {
        title: "端侧暴力拦截带来的触达风险",
        desc: `端侧 AI 处理通知摘要和过滤来电的能力正在加强。后续针对大 R 玩家的定向私域营销或官方电话回访，话术必须精炼且带有官方背书。冗余营销话术极易被端侧 AI 直接判定为垃圾推销并拦截，导致触达率断崖式下跌。`
      }
    },
    {
      id: 'feature-4',
      icon: <Camera className="w-5 h-5" />,
      title: "AI 无痕扫描与影像生成",
      badge: "端侧自动化",
      description: "将复杂的图像后期压缩成端侧一键自动化或自然语言指令。",
      subFeatures: [
        {
          name: "AI 文档无痕扫描",
          desc: "相机对准文件，自动校正并消除褶皱。实测痛点解决：能无痕抹除误入画面的手指，直出排版整洁的 PDF。",
          link: "官方发布会回放 37:02 处，自动消除手指演示",
          url: "https://www.youtube.com/watch?v=SA93zbnoR4U"
        },
        {
          name: "一句话修图",
          desc: "通过自然语言指令实现局部补全或场景转换（例如：把被咬一口的蛋糕补全）。",
          link: "GadgetGuy 现场实机演示文章，内含生成式补全动图",
          url: "https://www.gadgetguy.com.au/samsung-galaxy-s26-photo-assist-editing-hands-on/"
        },
        {
          name: "Audio Eraser 全局降噪",
          desc: "海外新发现：不再局限于原生相册，支持在第三方 App（YouTube、TikTok）播放时，实时消除环境杂音，凸显人声。",
          link: "The Verge 视频 3:30 处，实测第三方视频实时降噪",
          url: "https://www.youtube.com/watch?v=0ZTRxqVhXJo"
        }
      ],
      competitor: null,
      insight: {
        title: "零门槛的 UGC 生产力",
        desc: `消除、补全甚至音视频降噪已成为端侧标配基建。在外发业务的宣发期，可以直接利用玩家手机的原生能力做运营。例如放出留白或带有杂音的游戏互动素材，引导玩家使用系统自带 AI 进行\u201c二创\u201d，极大降低 UGC 门槛，提高裂变率。`
      }
    }
  ]
};

// --- 组件层 ---

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', title: '摘要与核心洞察', icon: <Sparkles className="w-4 h-4" /> },
    ...reportData.features.map(f => ({ id: f.id, title: f.title, icon: f.icon }))
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' } 
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* 顶部固定导航栏 */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <h1 className="font-bold text-gray-900 text-lg tracking-tight truncate">竞品AI特性分析</h1>
            </div>

            <nav className="hidden md:flex p-1 space-x-1 bg-gray-100/80 rounded-full border border-gray-200/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
                    ${activeSection === item.id 
                      ? 'bg-white text-gray-900 shadow-sm ring-1 ring-gray-200/50' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'}
                  `}
                >
                  {React.cloneElement(item.icon, { className: `w-4 h-4 ${activeSection === item.id ? 'text-indigo-600' : 'text-gray-400'}` })}
                  <span>{item.title}</span>
                </button>
              ))}
            </nav>

            <div className="flex items-center md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl absolute w-full left-0 top-16">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200
                    ${activeSection === item.id 
                      ? 'bg-indigo-50/80 text-indigo-700 shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  {React.cloneElement(item.icon, { className: `w-5 h-5 ${activeSection === item.id ? 'text-indigo-600' : 'text-gray-400'}` })}
                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto p-6 md:p-10 space-y-24 pb-24">
        
        <div className="hidden md:block mb-4 pt-4">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{reportData.title}</h1>
          <p className="text-lg text-gray-500">{reportData.subtitle}</p>
        </div>

        {/* Section: Overview */}
        <section id="overview" className="scroll-mt-24 animate-in fade-in duration-500 space-y-8">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <Cpu className="w-64 h-64" />
            </div>
            <h2 className="text-3xl font-bold mb-4 relative z-10 flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              系统级智能体时代的到来
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-6 relative z-10">
              {reportData.overview.summary}
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <AlertTriangle className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-900">核心业务洞察</h3>
            </div>
            <p className="text-amber-800 text-lg leading-relaxed">
              {reportData.overview.coreInsight}
            </p>
          </div>
        </section>

        {/* Sections: Features */}
        {reportData.features.map(feature => (
          <section key={feature.id} id={feature.id} className="scroll-mt-24 animate-in fade-in duration-500 space-y-6">
            <div className="border-b pb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full flex items-center gap-1">
                  {feature.icon}
                  {feature.badge}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">{feature.title}</h2>
              <p className="text-gray-600 mt-4 text-lg">{feature.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {feature.subFeatures.map((sub, idx) => (
                <div key={idx} className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {sub.name}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{sub.desc}</p>
                  <a 
                    href={sub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 rounded-lg p-3 text-sm text-gray-500 hover:text-indigo-600 flex items-start gap-2 transition-all cursor-pointer"
                  >
                    <PlayCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                    <span className="group-hover:underline decoration-indigo-300 underline-offset-2 leading-relaxed">{sub.link}</span>
                  </a>
                </div>
              ))}
            </div>

            {feature.appendix && (
              <div className="bg-blue-50/50 border border-blue-100/60 rounded-xl p-5">
                <h4 className="text-sm font-bold text-blue-800 mb-3">{feature.appendix.title}</h4>
                <ul className="space-y-2">
                  {feature.appendix.items.map((item, i) => {
                    const [label, ...rest] = item.split('\uff1a');
                    return (
                      <li key={i} className="text-sm text-blue-700 flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span><strong>{label}{"\uff1a"}</strong>{rest.join('\uff1a')}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {feature.competitor && (
              <div className="relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-slate-50/80 rounded-bl-full transition-colors duration-500 group-hover:bg-slate-100"></div>
                
                <div className="relative z-10 flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 shadow-sm">
                    <GitCompare className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800 tracking-wide">竞品对比</h4>
                </div>
                
                <div className="relative z-10 text-slate-600 leading-relaxed text-[15px]">
                  {feature.competitor}
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-indigo-100 rounded-2xl p-6 relative overflow-hidden mt-8">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Lightbulb className="w-24 h-24 text-indigo-600" />
              </div>
              <div className="flex items-center gap-2 mb-3 relative z-10">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-bold text-indigo-900">{`外发业务洞察：${feature.insight.title}`}</h3>
              </div>
              <p className="text-indigo-800 leading-relaxed relative z-10">
                {feature.insight.desc}
              </p>
            </div>
          </section>
        ))}
          
      </main>
    </div>
  );
}
