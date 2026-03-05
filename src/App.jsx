import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Search,
  ShieldCheck,
  Lightbulb,
  PlayCircle,
  Smartphone,
  Layers,
  Sparkles,
  AlertTriangle,
  Menu,
  X,
  GitCompare,
  TrendingUp,
  Target,
  Eye,
  Phone,
  CirclePlay,
  Megaphone,
  ShieldAlert,
  ArrowRight,
  Info,
  Table,
  Clock
} from 'lucide-react';

// --- \u6570\u636e\u5c42 ---
const reportData = {
  title: `\u4e09\u661f S26\uff08\u6d77\u5916\u7248\uff09AI \u7279\u6027\u5206\u6790\u53ca\u6d1e\u5bdf`,
  subtitle: `\u7aef\u4fa7 AI \u667a\u80fd\u4f53\u6df1\u5316\u4e0e\u4e1a\u52a1\u542f\u793a`,
  overview: {
    id: 'overview',
    summary: `\u5f53\u524d\u65d7\u8230\u624b\u673a AI \u6b63\u7ecf\u5386\u4ece\u201c\u5355\u70b9\u5de5\u5177\u201d\u5411\u201c\u7cfb\u7edf\u7ea7\u667a\u80fd\u4f53\uff08Agent\uff09\u201d\u7684\u6301\u7eed\u6df1\u5316\uff0c\u4e09\u661f Galaxy S26 \u6d77\u5916\u7248\u8fdb\u4e00\u6b65\u6df1\u5ea6\u96c6\u6210\u8c37\u6b4c Gemini \u591a\u6a21\u6001\u5927\u6a21\u578b\uff0c\u901a\u8fc7\u7aef\u4fa7\u63a8\u7406\u80fd\u529b\u4e0e\u7cfb\u7edf\u7ea7 AI \u6846\u67b6\u7684\u6253\u901a\uff0c\u57fa\u4e8e\u5b89\u5353\u6807\u51c6 API \u5b9e\u73b0\u4e86\u66f4\u6d41\u7545\u7684\u6388\u6743\u5f0f\u8de8\u5e94\u7528 AI \u64cd\u4f5c\uff0c\u5927\u5e45\u63d0\u5347\u4e86\u7cfb\u7edf\u667a\u80fd\u4f53\u7684\u6267\u884c\u6548\u7387\u3002`,
    coreInsight: `\u624b\u673a\u7aef\u4fa7 AI \u7684\u8fdb\u6b65\u77ed\u671f\u5185\u4e0d\u4f1a\u98a0\u8986\u7cbe\u54c1\u91cd\u5ea6\u6e38\u620f\u201c\u91cd\u51b3\u7b56\u3001\u91cd\u6c89\u6d78\u201d\u7684\u4e0b\u8f7d\u4e0e\u6e38\u73a9\u94fe\u8def\uff0c\u4f46\u5176\u201c\u591a\u6a21\u6001\u89c6\u89c9\u68c0\u7d22\u201d\u80fd\u529b\u672c\u8d28\u4e0a\u5374\u6709\u6548\u7f29\u77ed\u4e86\u6e38\u620f\u5185\u5bb9\u7684\u201c\u53d1\u73b0 - \u8f6c\u5316\u201d\u6f0f\u6597\u3002\u9700\u6301\u7eed\u5173\u6ce8\u7528\u6237\u7aef\u4fa7\u884c\u4e3a\u4e60\u60ef\u7684\u53d8\u5316\uff0c\u8b66\u60d5\u53ef\u80fd\u51fa\u73b0\u7684\u201c\u610f\u56fe\u5206\u53d1\u201d\u65b0\u5165\u53e3\u3002`
  },
  evolution: {
    id: 'evolution',
    title: `S \u7cfb\u5217\u7ec8\u7aef AI \u6f14\u8fdb`,
    subtitle: `\u8d8b\u52bf\uff1a\u4ea4\u4e92\u8303\u5f0f\u6b63\u4ece\u201c\u624b\u52a8\u5524\u9192\u5de5\u5177\u201d\u5411\u201c\u610f\u56fe\u9a71\u52a8\uff0c\u673a\u5668\u4ee3\u529e\u201d\u8f6c\u79fb`,
    items: [
      {
        model: 'S24',
        year: '2024',
        strategy: `AI \u624b\u673a\u5143\u5e74\uff0c\u7cfb\u7edf\u7ea7 AI \u80fd\u529b\u9996\u53d1`,
        paradigm: `\u5de5\u5177\u4e3b\u52a8\u9002\u914d\uff0c\u4eba\u627e\u529f\u80fd\u4e3a\u4e3b`,
        features: `\u9996\u53d1 Galaxy AI \u6846\u67b6\uff0c\u6838\u5fc3\u843d\u5730\u5373\u5708\u5373\u641c\u3001AI \u751f\u6210\u5f0f\u7f16\u8f91\u3001\u7cfb\u7edf\u901a\u8bdd\u5b9e\u65f6\u540c\u4f20\u3001AI \u7b14\u8bb0/\u6587\u6848\u8f85\u52a9\u3002AI \u80fd\u529b\u6df1\u5ea6\u96c6\u6210 One UI \u539f\u751f\u6a21\u5757\uff0c\u8986\u76d6\u9ad8\u9891\u57fa\u7840\u573a\u666f\u3002`
      },
      {
        model: 'S25',
        year: '2025',
        strategy: `\u80fd\u529b\u6cdb\u5316\uff0c\u7aef\u4fa7\u6a21\u578b\u4e0e\u573a\u666f\u6df1\u5ea6\u4e0b\u6c89`,
        paradigm: `\u573a\u666f\u8054\u52a8\u8f85\u52a9\uff0cAI \u4e3b\u52a8\u63d0\u6548`,
        features: `\u5347\u7ea7 Gemini Nano 2 \u7aef\u4fa7\u6a21\u578b\uff0cAI \u80fd\u529b\u4ece\u539f\u751f\u573a\u666f\u5411\u7b2c\u4e09\u65b9\u5e94\u7528\u9002\u914d\u62d3\u5c55\u3002\u5f3a\u5316\u7aef\u4fa7\u591a\u6a21\u6001\u7406\u89e3\u3001\u5f71\u50cf AI \u751f\u6210\u3001\u7cfb\u7edf\u7ea7\u7ffb\u8bd1\u80fd\u529b\uff0c\u4f18\u5316\u8de8\u5e94\u7528\u6570\u636e\u4e92\u901a\u7684 AI \u8f85\u52a9\u4f53\u9a8c\u3002`
      },
      {
        model: 'S26',
        year: '2026',
        strategy: `\u7cfb\u7edf\u7ea7\u667a\u80fd\u4f53\u6df1\u5316\uff0c\u610f\u56fe\u9a71\u52a8\u95ed\u73af\u843d\u5730`,
        paradigm: `\u610f\u56fe\u9a71\u52a8\uff0c\u673a\u5668\u4ee3\u529e`,
        features: `\u57fa\u4e8e\u7aef\u4fa7+\u4e91\u7aef\u6df7\u5408\u5927\u6a21\u578b\uff0c\u5347\u7ea7 Agent \u5f0f\u8de8\u5e94\u7528\u81ea\u4e3b\u8c03\u5ea6\u80fd\u529b\uff0c\u652f\u6301\u591a\u4efb\u52a1\u5e76\u884c\u5904\u7406\u4e0e\u591a\u76ee\u6807\u68c0\u7d22\u3002\u5b9e\u73b0\u7528\u6237\u81ea\u7136\u8bed\u8a00\u610f\u56fe\u5230\u591a\u6b65\u8de8\u5e94\u7528\u64cd\u4f5c\u7684\u95ed\u73af\u6267\u884c\uff0c\u8fdb\u4e00\u6b65\u964d\u4f4e\u7528\u6237\u64cd\u4f5c\u95e8\u69db\u3002`
      }
    ]
  },
  comparison: {
    id: 'comparison',
    title: `\u591a\u7ef4\u5bf9\u6bd4\uff1aS26 vs \u8c46\u5305 vs \u82f9\u679c`,
    subtitle: `\u4e09\u6b3e\u673a\u578b\u4ee3\u8868\u7aef\u4fa7 AI Agent \u4e09\u5927\u4e3b\u6d41\u6280\u672f\u8def\u7ebf\uff1a\u5b89\u5353\u6807\u51c6 API \u9a71\u52a8\u3001\u89c6\u89c9 UI \u81ea\u52a8\u5316\u3001iOS \u5c01\u95ed\u751f\u6001\u9650\u5b9a API\uff0c\u8def\u7ebf\u5dee\u5f02\u76f4\u63a5\u51b3\u5b9a\u80fd\u529b\u8fb9\u754c\u3001\u8986\u76d6\u8303\u56f4\u4e0e\u7a33\u5b9a\u6027\u3002`,
    dimensions: [
      {
        label: `\u5e95\u5c42\u6267\u884c\u8def\u7ebf`,
        samsung: `\u5b89\u5353\u6807\u51c6 API \u63a5\u53e3\u8c03\u7528`,
        doubao: `UI \u6811\u89e3\u6790 + \u6a21\u62df\u7528\u6237\u64cd\u4f5c`,
        apple: `Siri Intents \u9650\u5b9a\u6807\u51c6\u63a5\u53e3`
      },
      {
        label: `\u8de8\u5e94\u7528\u8986\u76d6\u7387`,
        samsung: `\u4e2d\uff08\u4f9d\u8d56\u5e94\u7528\u9002\u914d\uff09`,
        doubao: `\u9ad8\uff08\u65e0\u63a5\u53e3\u4f9d\u8d56\uff09`,
        apple: `\u6781\u4f4e\uff08\u4ec5\u9002\u914d\u7b2c\u4e00\u65b9\u53ca\u90e8\u5206\u6df1\u5ea6\u5408\u4f5c\u5e94\u7528\uff09`
      },
      {
        label: `\u4ea4\u4e92\u8fde\u8d2f\u6027`,
        samsung: `\u4e2d\u9ad8\uff08\u540e\u53f0\u805a\u5408\u5904\u7406\uff09`,
        doubao: `\u4e2d\uff08\u9700\u591a\u5e94\u7528\u8df3\u8f6c\uff09`,
        apple: `\u9ad8\uff08\u539f\u751f\u95ed\u73af\uff0c\u573a\u666f\u6709\u9650\uff09`
      },
      {
        label: `\u6267\u884c\u7a33\u5b9a\u6027`,
        samsung: `\u6781\u9ad8\uff08\u4e0d\u53d7 UI \u8fed\u4ee3\u5f71\u54cd\uff09`,
        doubao: `\u8f83\u4f4e\uff08\u6613\u88ab\u5f39\u7a97/\u53d8\u66f4\u6253\u65ad\uff09`,
        apple: `\u6781\u9ad8\uff08\u5c01\u95ed\u751f\u6001\u5f3a\u7ba1\u63a7\uff09`
      },
      {
        label: `\u89c6\u89c9\u68c0\u7d22\u6df1\u5ea6`,
        samsung: `\u4e2d\u9ad8\uff08\u591a\u76ee\u6807\u5e76\u884c\u8bc6\u522b\uff09`,
        doubao: `\u9ad8\uff08\u5168\u5c40\u8bed\u4e49\u7406\u89e3 + \u63a8\u7406\uff09`,
        apple: `\u4e2d\uff08\u5f00\u653e\u80fd\u529b\u6709\u9650\uff09`
      },
      {
        label: `\u4e1a\u52a1\u9002\u914d\u6210\u672c`,
        samsung: `\u4e2d\uff08\u9700\u9002\u914d\u6807\u51c6\u63a5\u53e3\uff09`,
        doubao: `\u4f4e\uff08\u4ec5\u4f18\u5316\u65e0\u969c\u788d\u6807\u7b7e\uff09`,
        apple: `\u9ad8\uff08\u573a\u666f\u53d7\u9650\uff0c\u9002\u914d\u6210\u672c\u9ad8\uff09`
      }
    ]
  },
  features: [
    {
      id: 'feature-1',
      icon: <Layers className="w-5 h-5" />,
      title: `Agentic AI \u8de8\u5e94\u7528\u8c03\u5ea6`,
      badge: `\u7cfb\u7edf\u7ea7\u667a\u80fd\u4f53`,
      description: `\u7528\u6237\u4e0b\u8fbe\u4e00\u53e5\u8bdd\u6307\u4ee4\uff0cAI \u5728\u5b89\u5168\u9694\u79bb\u7684\u865a\u62df\u6c99\u7bb1\u4e2d\uff0c\u901a\u8fc7\u5c4f\u5e55\u8bed\u4e49\u7406\u89e3\u548c\u5e95\u5c42 API \u8c03\u7528\u7684\u53cc\u8def\u5f84\uff0c\u81ea\u52a8\u5b8c\u6210\u591a\u4e2a App \u7684\u5207\u6362\u548c\u64cd\u4f5c\u3002\u4f46\u6d89\u53ca\u8d44\u91d1\u7684\u652f\u4ed8\u786e\u8ba4\uff0c\u5fc5\u987b\u7531\u7528\u6237\u624b\u52a8\u9a8c\u8bc1\u6388\u6743\u3002`,
      videoUrl: 'https://drive.weixin.qq.com/s?k=AJEAIQdfAAo9lyyE1n',
      videoLabel: `Agentic AI \u8de8\u5e94\u7528\u8c03\u5ea6`,
      note: `\u521d\u671f\u4ec5\u5f00\u653e\u98df\u54c1\u5916\u5356\u3001\u751f\u9c9c\u6742\u8d27\u3001\u7f51\u7ea6\u8f66\u4e09\u5927\u7c7b\u5408\u89c4\u751f\u6d3b\u573a\u666f\uff0c\u9996\u6279\u4ec5\u5728\u7f8e\u56fd\u3001\u97e9\u56fd\u5e02\u573a\u63a8\u9001\u6d4b\u8bd5\u7248\uff0c\u6e38\u620f\u7c7b\u5e94\u7528\u6682\u4e0d\u5728\u7cfb\u7edf\u7ea7\u9002\u914d\u8303\u56f4\u5185\u3002`
    },
    {
      id: 'feature-2',
      icon: <Search className="w-5 h-5" />,
      title: `Ask AI \u6df1\u5ea6\u68c0\u7d22`,
      badge: `\u6df1\u5ea6\u68c0\u7d22`,
      description: `\u96c6\u6210 Perplexity \u5f15\u64ce\uff0c\u5c06\u624b\u673a\u53d8\u6210\u4e3b\u52a8\u4fe1\u606f\u5904\u7406\u7ec8\u7aef\uff0c\u89e3\u51b3\u591a\u7ebf\u4fe1\u606f\u6574\u7406\u75db\u70b9\u3002\u539f\u751f\u6d4f\u89c8\u5668\u4e2d\uff0c\u8c03\u7528 Ask AI\uff08Hey Plex\uff09\uff0c\u53ef\u76f4\u63a5\u5bf9\u5e76\u884c\u6253\u5f00\u7684\u591a\u4e2a\u7814\u62a5/\u957f\u6587\u7f51\u9875\u8fdb\u884c\u4ea4\u53c9\u6bd4\u5bf9\uff0c\u8f93\u51fa\u7ed3\u6784\u5316\u6458\u8981\u3002`,
      videoUrl: 'https://drive.weixin.qq.com/s?k=AJEAIQdfAAoTQWRJBY',
      videoLabel: `Ask AI \u6df1\u5ea6\u68c0\u7d22`
    },
    {
      id: 'feature-3',
      icon: <Target className="w-5 h-5" />,
      title: `\u591a\u76ee\u6807\u68c0\u7d22\uff08\u5347\u7ea7\u7248\u753b\u5708\u641c\u7d22\uff09`,
      badge: `\u89c6\u89c9\u68c0\u7d22`,
      description: `S26 \u7684\u753b\u5708\u641c\u7d22\u5177\u5907\u4e00\u6b21\u6027\u89e3\u6790\u591a\u4e2a\u5173\u8054\u89c6\u89c9\u5143\u7d20\u7684\u80fd\u529b\uff0c\u53ef\u5e76\u884c\u8f93\u51fa\u753b\u9762\u4e2d\u591a\u4e2a\u72ec\u7acb\u76ee\u6807\u7684\u641c\u7d22\u7ed3\u679c\u3002`,
      videoUrl: 'https://drive.weixin.qq.com/s?k=AJEAIQdfAAoB4KkzAF',
      videoLabel: `\u591a\u76ee\u6807\u68c0\u7d22`
    },
    {
      id: 'feature-4',
      icon: <ShieldCheck className="w-5 h-5" />,
      title: `\u7aef\u4fa7\u901a\u8bdd\u8fc7\u6ee4\u4e0e\u7269\u7406\u9632\u7aa5\u5c4f`,
      badge: `\u9690\u79c1\u9632\u5fa1`,
      description: `\u7aef\u4fa7\u4e0d\u8054\u7f51\u7684\u672c\u5730\u5fae\u6a21\u578b\u53ef\u81ea\u52a8\u4ee3\u63a5\u672a\u77e5\u6765\u7535\uff0c\u5b9e\u65f6\u8f6c\u5f55\u6587\u5b57\u6458\u8981\u5e76\u8fdb\u884c\u53cd\u8bc8\u62e6\u622a\uff1b\u540c\u65f6 S26 \u91c7\u7528\u4e86\u53cc\u50cf\u7d20\u67b6\u6784\u5b9e\u73b0\u786c\u4ef6\u7ea7\u7684\u7269\u7406\u9632\u7aa5\u5c4f\u3002`,
      videoUrls: [
        { url: 'https://drive.weixin.qq.com/s?k=AJEAIQdfAAo6ql2Ke1', label: `\u7aef\u4fa7\u901a\u8bdd\u8fc7\u6ee4` },
        { url: 'https://drive.weixin.qq.com/s?k=AJEAIQdfAAoyPJ6fV9', label: `\u7269\u7406\u9632\u7aa5\u5c4f` }
      ]
    }
  ],
  actionPlan: {
    id: 'action-plan',
    title: `\u4e1a\u52a1\u601d\u8003\u4e0e\u884c\u52a8\u8ba1\u5212`,
    items: [
      {
        role: `\u5546\u52a1\u4fa7`,
        icon: <TrendingUp className="w-5 h-5" />,
        title: `\u6301\u7eed\u5173\u6ce8\u201c\u610f\u56fe\u5206\u53d1\u201d\u65b0\u5165\u53e3`,
        desc: `\u9700\u6301\u7eed\u8ddf\u8fdb AI\u201c\u610f\u56fe\u5206\u53d1\u201d\u65b0\u8d5b\u9053\u7684\u89c4\u5219\u53d8\u5316\uff0c\u524d\u7f6e\u5e03\u5c40\u7aef\u4fa7 AI \u5206\u53d1\u80fd\u529b\u4e0e\u9002\u914d\uff0c\u540c\u6b65\u91cd\u70b9\u76d1\u63a7\u8c46\u5305\u624b\u673a 2.0 \u7b49\u7ade\u54c1\u7684\u529f\u80fd\u8fed\u4ee3\u4e0e\u5e02\u573a\u8206\u60c5\uff0c\u63d0\u524d\u5236\u5b9a\u5e94\u5bf9\u9884\u6848\u3002`
      },
      {
        role: `\u8fd0\u8425\u4fa7`,
        icon: <Megaphone className="w-5 h-5" />,
        title: `\u5173\u6ce8\u7528\u6237\u89e6\u8fbe\u7684 AI \u9002\u914d`,
        actions: [
          {
            label: `\u89c6\u89c9\u9632\u5b88`,
            icon: <Eye className="w-4 h-4" />,
            desc: `\u5ba3\u53d1\u7269\u6599\uff08CG\u3001\u6d77\u62a5\u3001\u77ed\u89c6\u9891\u5207\u7247\uff09\u9700\u5f3a\u5316\u6838\u5fc3\u89c6\u89c9\u8d44\u4ea7\uff08\u9ad8\u8fa8\u8bc6\u5ea6\u89d2\u8272\u3001\u4e13\u5c5e LOGO\u3001\u5173\u952e\u9053\u5177\uff09\u7684\u7279\u5f81\u9884\u57cb\uff0c\u786e\u4fdd\u7aef\u4fa7 AI \u89c6\u89c9\u68c0\u7d22\u80fd\u529b\u53ef\u7cbe\u51c6\u8bc6\u522b\uff0c\u5b9e\u73b0\u6709\u6548\u622a\u6d41\u4e0e\u89e6\u8fbe\u3002`
          },
          {
            label: `\u7535\u9500\u7a81\u7834`,
            icon: <Phone className="w-4 h-4" />,
            desc: `\u7535\u8bdd\u8425\u9500\u9700\u6ce8\u91cd\u8bdd\u672f\u8868\u8fbe\uff0c\u63a5\u901a\u540e\u7684\u524d 5 \u79d2\u91c7\u7528\u9ad8\u4fe1\u606f\u5bc6\u5ea6\u8868\u8fbe\u6838\u5fc3\u6743\u76ca\u5185\u5bb9\uff0c\u89c4\u907f\u7aef\u4fa7 AI \u6a21\u578b\u7684\u9a9a\u6270\u6765\u7535\u62e6\u622a\uff0c\u4fdd\u969c\u9ad8\u51c0\u503c\u7528\u6237\uff08\u5927 R\uff09\u7684\u6709\u6548\u89e6\u8fbe\u7387\u3002`
          }
        ]
      }
    ]
  }
};

// --- \u7ec4\u4ef6\u5c42 ---

// \u6f14\u8fdb\u65f6\u95f4\u7ebf\u5361\u7247
function EvolutionCard({ item, isLast }) {
  const colorMap = {
    'S24': { bg: 'bg-blue-50', border: 'border-blue-200', dot: 'bg-blue-500', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-800' },
    'S25': { bg: 'bg-violet-50', border: 'border-violet-200', dot: 'bg-violet-500', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-800' },
    'S26': { bg: 'bg-indigo-50', border: 'border-indigo-200', dot: 'bg-indigo-600', text: 'text-indigo-700', badge: 'bg-indigo-100 text-indigo-800' }
  };
  const c = colorMap[item.model] || colorMap['S24'];

  return (
    <div className="relative flex gap-4 md:gap-6">
      {/* \u65f6\u95f4\u7ebf */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 ring-white shadow-md z-10 flex-shrink-0`}></div>
        {!isLast && <div className="w-0.5 flex-1 bg-gray-200 mt-1"></div>}
      </div>
      {/* \u5361\u7247 */}
      <div className={`${c.bg} ${c.border} border rounded-2xl p-5 md:p-6 mb-6 flex-1 shadow-sm`}>
        <div className="flex items-center gap-3 mb-3">
          <span className={`${c.badge} text-sm font-bold px-3 py-1 rounded-full`}>{item.model}</span>
          <span className="text-gray-400 text-sm font-medium">{item.year}</span>
        </div>
        <h4 className={`font-bold ${c.text} text-base mb-1`}>{item.strategy}</h4>
        <div className="flex items-center gap-2 mb-3">
          <ArrowRight className={`w-4 h-4 ${c.text} flex-shrink-0`} />
          <span className={`text-sm font-semibold ${c.text}`}>{item.paradigm}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{item.features}</p>
      </div>
    </div>
  );
}

// \u5bf9\u6bd4\u8868\u683c
function ComparisonTable({ dimensions }) {
  return (
    <div className="overflow-x-auto -mx-2">
      <table className="w-full text-sm border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left p-3 font-bold text-gray-700 border-b-2 border-gray-200 w-[18%]">{`\u8bc4\u4f30\u7ef4\u5ea6`}</th>
            <th className="text-left p-3 font-bold text-gray-700 border-b-2 border-gray-200 w-[27.3%]">
              <span className="flex items-center gap-1.5">{`\ud83d\udcf1 \u4e09\u661f S26`}</span>
              <span className="text-xs font-normal text-gray-400 block mt-0.5">{`\u6d77\u5916 API \u6807\u6746`}</span>
            </th>
            <th className="text-left p-3 font-bold text-gray-700 border-b-2 border-gray-200 w-[27.3%]">
              <span className="flex items-center gap-1.5">{`\ud83e\udd5f \u8c46\u5305 AI \u624b\u673a`}</span>
              <span className="text-xs font-normal text-gray-400 block mt-0.5">{`\u56fd\u5185\u89c6\u89c9\u65b9\u6848`}</span>
            </th>
            <th className="text-left p-3 font-bold text-gray-700 border-b-2 border-gray-200 w-[27.3%]">
              <span className="flex items-center gap-1.5">{`\ud83c\udf4e \u82f9\u679c iPhone 17`}</span>
              <span className="text-xs font-normal text-gray-400 block mt-0.5">{`iOS \u5c01\u95ed\u751f\u6001`}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {dimensions.map((d, i) => (
            <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-indigo-50/30 transition-colors`}>
              <td className="p-3 font-semibold text-gray-800 border-b border-gray-100">{d.label}</td>
              <td className="p-3 text-gray-600 border-b border-gray-100">{d.samsung}</td>
              <td className="p-3 text-gray-600 border-b border-gray-100">{d.doubao}</td>
              <td className="p-3 text-gray-600 border-b border-gray-100">{d.apple}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', title: `\u6458\u8981`, icon: <Sparkles className="w-4 h-4" /> },
    { id: 'evolution', title: `AI \u6f14\u8fdb`, icon: <Clock className="w-4 h-4" /> },
    { id: 'comparison', title: `\u4e09\u65b9\u5bf9\u6bd4`, icon: <GitCompare className="w-4 h-4" /> },
    { id: 'features', title: `\u6838\u5fc3\u7279\u6027`, icon: <Layers className="w-4 h-4" /> },
    { id: 'action-plan', title: `\u884c\u52a8\u8ba1\u5212`, icon: <Target className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // features section \u7528\u7edf\u4e00\u7684 id
            const id = entry.target.dataset.navId || entry.target.id;
            setActiveSection(id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[data-nav-id], section[id]');
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

      {/* \u9876\u90e8\u56fa\u5b9a\u5bfc\u822a\u680f */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <h1 className="font-bold text-gray-900 text-lg tracking-tight truncate">{`S26 AI \u7279\u6027\u5206\u6790`}</h1>
            </div>

            <nav className="hidden lg:flex p-1 space-x-1 bg-gray-100/80 rounded-full border border-gray-200/50">
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

            <div className="flex items-center lg:hidden">
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
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl absolute w-full left-0 top-16">
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6 md:p-10 space-y-20 pb-24">

        {/* Header */}
        <div className="pt-4">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">{reportData.title}</h1>
          <p className="text-base md:text-lg text-gray-500">{reportData.subtitle}</p>
        </div>

        {/* Section: Overview */}
        <section id="overview" className="scroll-mt-24 space-y-8">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-800 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <Cpu className="w-64 h-64" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10 flex items-center gap-3">
              <Sparkles className="w-7 h-7 md:w-8 md:h-8" />
              {`\u6838\u5fc3\u6458\u8981`}
            </h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed relative z-10">
              {reportData.overview.summary}
            </p>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5 md:p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 p-2 rounded-lg">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-amber-900">{`\u4e1a\u52a1\u6d1e\u5bdf`}</h3>
            </div>
            <p className="text-amber-800 text-base md:text-lg leading-relaxed">
              {reportData.overview.coreInsight}
            </p>
          </div>
        </section>

        {/* Section: Evolution */}
        <section id="evolution" className="scroll-mt-24 space-y-6">
          <div className="border-b pb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {`2024\u20132026`}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{reportData.evolution.title}</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base italic">{reportData.evolution.subtitle}</p>
          </div>

          <div className="pl-1">
            {reportData.evolution.items.map((item, idx) => (
              <EvolutionCard key={item.model} item={item} isLast={idx === reportData.evolution.items.length - 1} />
            ))}
          </div>
        </section>

        {/* Section: Comparison */}
        <section id="comparison" className="scroll-mt-24 space-y-6">
          <div className="border-b pb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full flex items-center gap-1.5">
                <GitCompare className="w-4 h-4" />
                {`\u8def\u7ebf\u5bf9\u6bd4`}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{reportData.comparison.title}</h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">{reportData.comparison.subtitle}</p>
          </div>

          <div className="bg-white border rounded-2xl p-4 md:p-6 shadow-sm">
            <ComparisonTable dimensions={reportData.comparison.dimensions} />
          </div>
        </section>

        {/* Section: Features */}
        <section id="features" data-nav-id="features" className="scroll-mt-24 space-y-6">
          <div className="border-b pb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                {`\u6838\u5fc3\u80fd\u529b`}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{`\u6838\u5fc3 AI \u7279\u6027\u4e0e\u6f14\u793a`}</h2>
          </div>

          <div className="space-y-6">
            {reportData.features.map((feature, idx) => (
              <div key={feature.id} className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {React.cloneElement(feature.icon, { className: 'w-5 h-5 text-indigo-600' })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                      <span className="px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full">{feature.badge}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>

                    {/* \u89c6\u9891\u94fe\u63a5 */}
                    {feature.videoUrl && (
                      <a
                        href={feature.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 hover:border-indigo-200 rounded-xl px-4 py-2.5 text-sm text-indigo-700 hover:text-indigo-800 transition-all cursor-pointer"
                      >
                        <CirclePlay className="w-5 h-5 text-indigo-500 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
                        <span className="font-medium">{`\u5b9e\u673a\u6f14\u793a\uff1a${feature.videoLabel}`}</span>
                      </a>
                    )}

                    {feature.videoUrls && (
                      <div className="flex flex-wrap gap-2">
                        {feature.videoUrls.map((v, i) => (
                          <a
                            key={i}
                            href={v.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 hover:border-indigo-200 rounded-xl px-4 py-2.5 text-sm text-indigo-700 hover:text-indigo-800 transition-all cursor-pointer"
                          >
                            <CirclePlay className="w-5 h-5 text-indigo-500 group-hover:text-indigo-600 transition-colors flex-shrink-0" />
                            <span className="font-medium">{`\u5b9e\u673a\u6f14\u793a\uff1a${v.label}`}</span>
                          </a>
                        ))}
                      </div>
                    )}

                    {/* \u6ce8\u91ca */}
                    {feature.note && (
                      <div className="mt-3 flex items-start gap-2 bg-amber-50/80 border border-amber-100 rounded-lg p-3">
                        <Info className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-amber-700 leading-relaxed">{feature.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Action Plan */}
        <section id="action-plan" className="scroll-mt-24 space-y-6">
          <div className="border-b pb-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full flex items-center gap-1.5">
                <Target className="w-4 h-4" />
                {`\u884c\u52a8\u8ba1\u5212`}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{reportData.actionPlan.title}</h2>
          </div>

          <div className="space-y-6">
            {reportData.actionPlan.items.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-indigo-100 rounded-2xl p-5 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Target className="w-32 h-32 text-indigo-600" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 border border-indigo-200 flex items-center justify-center">
                      {React.cloneElement(item.icon, { className: 'w-4 h-4 text-indigo-600' })}
                    </div>
                    <span className="text-xs font-bold text-indigo-500 uppercase tracking-wider">{item.role}</span>
                  </div>
                  <h3 className="text-lg font-bold text-indigo-900 mb-3">{item.title}</h3>

                  {item.desc && (
                    <p className="text-indigo-800 leading-relaxed text-sm">{item.desc}</p>
                  )}

                  {item.actions && (
                    <div className="space-y-3 mt-2">
                      {item.actions.map((action, ai) => (
                        <div key={ai} className="bg-white/60 border border-indigo-100/60 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-6 h-6 rounded-md bg-indigo-100 flex items-center justify-center">
                              {action.icon}
                            </div>
                            <span className="font-bold text-indigo-800 text-sm">{action.label}</span>
                          </div>
                          <p className="text-indigo-700 text-sm leading-relaxed">{action.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
