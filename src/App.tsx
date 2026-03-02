import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Languages,
  ChevronDown, 
  ChevronRight, 
  ChevronLeft, 
  Globe, 
  Zap, 
  Search, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  FileText,
  BarChart3,
  Lightbulb,
  Target,
  TrendingUp,
  Layers
} from 'lucide-react';

// --- Components ---

const Navbar = ({ lang, setLang, t }) => {
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowRegister(true);
      } else {
        setShowRegister(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-4 w-full bg-white/90 backdrop-blur-lg z-[100] border-b border-slate-100 shadow-sm">
      <div className="flex items-center gap-2">
        <img 
          src="https://api.imghippo.com/files/HpN4303tbg.png" 
          alt="DiffMind Logo" 
          className="h-[24px] w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
          className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1 text-slate-500"
        >
          <Languages className="w-4 h-4" />
          <span className="text-[11px] font-medium uppercase">{lang === 'zh' ? 'EN' : '中文'}</span>
        </button>
        {showRegister && (
          <button 
            className="bg-[#4F46E5] text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
          >
            {t.navbarRegister}
          </button>
        )}
      </div>
    </nav>
  );
};

const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -50, scale: 0.95 }}
    viewport={{ once: false, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const TypewriterText = ({ text, className }) => {
  const characters = Array.from(text);
  return (
    <p className={className}>
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.05,
            delay: i * 0.03 + 0.8,
          }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

const Hero = ({ t }) => (
  <section className="relative pt-[140px] pb-16 px-6 text-center overflow-hidden gradient-bg">
    <div className="max-w-md mx-auto">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.5, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ 
          duration: 0.8, 
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="text-[34px] font-bold mb-4 leading-[1.2] text-slate-900"
      >
        {t.heroTitle1}<br />
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-blue-600 inline-block"
        >
          {t.heroTitle2}
        </motion.span>
      </motion.h1>
      
      <TypewriterText 
        text={t.heroDesc} 
        className="text-[15px] text-slate-500 mb-10 leading-[1.6] px-2 min-h-[3em]"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        className="relative inline-block mb-14"
      >
        <div className="absolute -top-[11px] -right-[15px] bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-sm z-10 shadow-sm">
          {t.heroBadge}
        </div>
        <button className="bg-[#4F46E5] text-white px-14 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95">
          {t.ctaText}
        </button>
      </motion.div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 2.0,
            }
          }
        }}
        className="grid grid-cols-3 gap-y-8 gap-x-2 items-center justify-start max-w-[240px] mx-auto mb-20"
      >
        {[
          { name: 'ChatGPT', icon: 'https://api.imghippo.com/files/YeyD2604wyw.png' },
          { name: 'Claude', icon: 'https://api.imghippo.com/files/Acx5687P.png' },
          { name: 'Gemini', icon: 'https://api.imghippo.com/files/AZCB9662E.png' },
          { name: 'DeepSeek', icon: 'https://api.imghippo.com/files/jXx2372JIY.png' },
          { name: 'Grok', icon: 'https://api.imghippo.com/files/DsZN1611xZA.png' },
          { name: 'Qwen', icon: 'https://api.imghippo.com/files/cSOv7495AFA.png' },
        ].map((ai) => (
          <motion.div 
            key={ai.name} 
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 }
            }}
            className="flex items-center gap-1.5 justify-start"
          >
            <img src={ai.icon} alt={ai.name} className="w-5 h-5 rounded-full shadow-sm" referrerPolicy="no-referrer" />
            <span className="text-[12px] font-medium text-slate-500 whitespace-nowrap">{ai.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>


    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="max-w-xl mx-auto relative px-2"
    >
      <div className="rounded-2xl border-[8px] border-white shadow-2xl overflow-hidden bg-white">
        <img 
          src="https://api.imghippo.com/files/AFn2897qEM.webp" 
          alt="Dashboard Preview" 
          className="w-full h-auto"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="w-28 h-12 bg-slate-100 mx-auto rounded-b-xl shadow-inner" />
      <div className="w-36 h-1.5 bg-slate-200 mx-auto rounded-full" />
    </motion.div>
  </section>
);

const AllInOne = ({ t }) => (
  <section className="py-19 px-6 text-center bg-white">
    <ScrollReveal>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[36px] font-bold text-blue-600 mb-5">ALL- In- One</h2>
        <div className="flex justify-center mb-10">
          <img 
            src="https://api.imghippo.com/files/G9366BAU.png" 
            alt="All In One Graphic" 
            className="w-20 h-20 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="space-y-6 text-[18px] font-medium text-slate-600">
          <p>{t.allInOne1}</p>
          <p>{t.allInOne2}</p>
          <p>{t.allInOne3}</p>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

const FeatureBlock = ({ title, description, image, linkText }) => (
  <section className="py-8 px-6 bg-white">
    <ScrollReveal>
      <div className="max-w-md mx-auto flex flex-col">
        <div className="w-full mb-8">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto rounded-2xl" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="px-2">
          <h3 className="text-[20px] font-bold mb-3 text-slate-900">{title}</h3>
          <p className="text-[14px] text-slate-500 mb-6 leading-[1.7]">
            {description}
          </p>
          <button className="inline-flex items-center px-8 py-2.5 border border-blue-200 rounded-xl text-blue-600 font-semibold text-[15px] hover:bg-blue-50 transition-all group">
            {linkText} <ChevronRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

const Testimonials = ({ t }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const reviews = t.reviews;

  const totalPages = Math.ceil(reviews.length / 2);
  const next = () => setCurrentPage((currentPage + 1) % totalPages);
  const prev = () => setCurrentPage((currentPage - 1 + totalPages) % totalPages);

  const currentReviews = reviews.slice(currentPage * 2, currentPage * 2 + 2);

  return (
    <section className="py-19 px-6 bg-slate-50">
      <ScrollReveal>
        <h2 className="text-[30px] font-bold text-center mb-16 text-slate-900">{t.testimonialsTitle}</h2>
        <div className="max-w-md mx-auto relative group">
          <div className="bg-white rounded-[40px] p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden min-h-[400px] flex flex-col touch-pan-y">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentPage}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) next();
                  if (info.offset.x > 50) prev();
                }}
                className="flex flex-col gap-12 flex-1 cursor-grab active:cursor-grabbing"
              >
                {currentReviews.map((review, idx) => (
                  <div key={idx} className="flex flex-col gap-6">
                    <div className="flex items-center gap-5">
                      <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-50 shadow-sm" referrerPolicy="no-referrer" />
                      <div>
                        <h4 className="font-bold text-[16px] text-slate-900 leading-tight">{review.name}</h4>
                        <p className="text-slate-400 text-[14px] mt-1">{review.role}</p>
                      </div>
                    </div>
                    <p className="text-[12px] text-slate-600 leading-[1.8] font-normal">
                      {review.text}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 p-2 text-slate-300 hover:text-slate-600 transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10 stroke-[1.5px]" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 p-2 text-slate-300 hover:text-slate-600 transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10 stroke-[1.5px]" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-7">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`w-[7px] h-[7px] rounded-full transition-all duration-300 ${currentPage === i ? 'bg-blue-600' : 'bg-blue-200'}`} 
            />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};

const FAQ = ({ t }) => {
  const faqs = t.faqs;

  // Default all to expanded
  const [openIndices, setOpenIndices] = useState<number[]>(faqs.map((_, i) => i));

  const toggle = (i: number) => {
    if (openIndices.includes(i)) {
      setOpenIndices(openIndices.filter(idx => idx !== i));
    } else {
      setOpenIndices([...openIndices, i]);
    }
  };

  return (
    <section className="py-19 px-6 bg-white">
      <ScrollReveal>
        <div className="max-w-xl mx-auto">
          <h2 className="text-[30px] font-bold text-center mb-16 text-slate-900">{t.faqTitle}</h2>
          <div className="divide-y divide-slate-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <button 
                  onClick={() => toggle(i)}
                  className="w-full py-2 flex items-center justify-between text-left font-bold text-[17px] text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span className="pr-6">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openIndices.includes(i) ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openIndices.includes(i) && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pb-2 text-[12px] text-slate-500 leading-[1.8]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

const Footer = ({ t }) => (
  <footer className="bg-[#020617] text-white py-20 px-6">
    <ScrollReveal>
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute -top-[11px] -right-[15px] bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-sm z-10">
              {t.footerBadge}
            </div>
            <button className="bg-blue-600 text-white px-[14px] py-5 rounded-2xl font-bold text-[16px] hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 active:scale-95">
              {t.footerCta}
            </button>
          </div>
          <p className="text-blue-400 text-[14px] font-medium text-left">
            {t.footerPromo}
          </p>
        </div>
        
        <div className="h-px bg-slate-800/50 w-full mb-16" />
        
        <p className="text-slate-400 text-[12px] mb-10 max-w-md mx-auto leading-[1.8]">
          {t.footerDesc}
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 mb-16 text-slate-300 text-[14px] font-medium">
          <a href="#" className="hover:text-white transition-colors">{t.footerLink1}</a>
          <a href="#" className="hover:text-white transition-colors">{t.footerLink2}</a>
        </div>
        
        <div className="text-slate-500 text-[12px] space-y-3">
          <p>{t.footerCopyright}</p>
        </div>
      </div>
    </ScrollReveal>
  </footer>
);

const translations = {
  zh: {
    heroTitle1: "一次提问！",
    heroTitle2: "多个AI一起回答",
    heroDesc: "一个窗口同时使用GPT、Gemini、Claude等多个AI，无需来回切换；同屏对比不同答案，避免单一AI幻觉",
    heroBadge: "送会员权益",
    ctaText: "立即免费体验",
    allInOne1: "更全面的视角",
    allInOne2: "更高效的协作",
    allInOne3: "更多元的智能",
    feature1Title: "同时使用多家全球顶级AI",
    feature1Desc: "一次订阅，同时使用GPT、Claude、Gemini、DeepSeek、Qwen等顶级AI，无需切换账号、无需重复订阅，AI能力一次到位。",
    feature2Title: "创意 · 调研 · 分析 · 决策",
    feature2Desc: "一个界面，串联灵感、调研、分析与判断，不用换平台，不用反复提问。从创意探索到深度思考，都在同一工作台中完成。",
    feature3Title: "思考更稳，决策更准",
    feature3Desc: "通过多模型同屏对比，有效识别 AI 幻觉，多维度验证答案准确性，让您的决策更有底气。不同模型优势互补，助您看清复杂问题的每一个侧面。",
    feature4Title: "提问增强 一键总结",
    feature4Desc: "纠结提问的问题不够专业，试试“提问增强”功能。“一键总结”可以快速归纳所有大模型的回复，找出异同辅助决策。",
    feature1Image: "https://api.imghippo.com/files/Kqdi5676UU.png",
    feature2Image: "https://api.imghippo.com/files/tWwF8450HKg.png",
    feature3Image: "https://api.imghippo.com/files/uoe6109bkk.png",
    feature4Image: "https://api.imghippo.com/files/TDQY7509Fg.png",
    linkText: "立即免费体验 ",
    testimonialsTitle: "用户评价",
    faqTitle: "常见问题",
    navbarRegister: "立即注册",
    footerBadge: "限时活动",
    footerCta: "现在注册，领会员权益",
    footerPromo: "马上注册，送115次（含15次高级模型）模型使用次数",
    footerDesc: "DiffMind 是一款面向学习、写作、创意探索与复杂问题分析场景的多模型 AI 对比工具",
    footerLink1: "关于 DiffMind",
    footerLink2: "DiffMind 官方介绍",
    footerCopyright: "本站为 DiffMind 官方网站 | 官方邮箱: info@diffmind.ai",
    reviews: [
      {
        name: "Ava Fang",
        role: "网红博主",
        text: "我写脚本最怕'写着写着就只剩一种思路'，创作者的脑洞真的很容易被掏空啊。diffmind 太救命了，给我'闪现灵感的感觉'！不同ai的想法居然能'拼'出我想要的方向，有点像请了三个风格完全不同的编剧。",
        avatar: "https://api.imghippo.com/files/FNO8471WaQ.png"
      },
      {
        name: "Jason Liu",
        role: "文案编辑",
        text: "gpt: 正经回答；claude: 文艺青年；gemini: 阴阳怪气。diffmind: 你们都上来一起比比看，结果比我预想还靠谱。",
        avatar: "https://api.imghippo.com/files/BAsC5978eGA.png"
      },
      {
        name: "Ethan Brooks",
        role: "用户运营",
        text: "从来没想过diffmind能这么省脑子。以前是我想方案抓耳挠腮想，现在是一个问题丢给ai们同台pk。我负责点头。舒服。",
        avatar: "https://api.imghippo.com/files/mc8313BVU.png"
      },
      {
        name: "Leo Park",
        role: "产品经理",
        text: "老实说，我之前觉得这种工具多余，结果试了一周，现在开需求前一定跑一遍diffmind。不是为了更快，是因为'视野打开'了。",
        avatar: "https://api.imghippo.com/files/IOp3134QYY.png"
      },
      {
        name: "Linda Wang",
        role: "内容创作者",
        text: "写文案最怕灵感枯竭。DiffMind 让我一次获得多种风格的草稿，我只需要在它们的基础上进行润色，效率提升了不止一倍。",
        avatar: "https://api.imghippo.com/files/czC2809bZw.png"
      },
      {
        name: "Kevin Zhang",
        role: "科研人员",
        text: "处理复杂的学术文献总结时，不同模型的侧重点不同。DiffMind 让我能快速交叉验证关键信息，确保研究的严谨性。",
        avatar: "https://api.imghippo.com/files/IOp3134QYY.png"
      }
    ],
    faqs: [
      {
        q: "DiffMind 是什么？",
        a: "DiffMind是一个多模型ai对比工作台，将多个顶尖大模型聚合在一起，帮助您在同一个界面里面提问、对比、验证和沉淀结论。"
      },
      {
        q: "DiffMind适合谁？",
        a: "面向学生、自媒体创作者、知识工作者、创业者、产品经理、程序员等需要深度思考创作和高质量决策的人群。"
      },
      {
        q: "DiffMind可以用来做什么？",
        a: "您可以通过diffmind同时使用多个顶尖ai模型，进行复杂问题分析、学术研究与论文辅助、商业策略与方案论证、文案与内容创作、灵感与创意激发等"
      },
      {
        q: "我需要懂AI才能用DiffMind吗？",
        a: "不需要。您只需提出您的问题或任务，就可以同时获得chatgpt/gemini/claude等多个顶尖大模型输出的不同视角的答案。diffmind入门使用简单，进阶空间巨大。"
      },
      {
        q: "DiffMind和ChatGPT/Gemini/Claude等有什么区别？",
        a: "DiffMind无法替代chatgpt们，但可以升级您的ai使用方式，让您在一个界面同时调用多个顶尖大模型，提升您的ai使用效率，为您带来多视角的可信结论。"
      },
      {
        q: "为什么要用DiffMind对比多个大模型的答案？",
        a: "不同大模型具备不同优势与显著的能力差异。diffmind可以帮助您发现偏差、避免误导、看见更多角度，并得到更可靠的结论，降低判断与决策风险。"
      }
    ]
  },
  en: {
    heroTitle1: "One Question!",
    heroTitle2: "Multiple AI Answers Together",
    heroDesc: "Use GPT, Gemini, Claude and more in one window. No more switching back and forth. Compare answers on the same screen to avoid AI hallucinations.",
    heroBadge: "Member Benefits",
    ctaText: "Try for Free Now",
    allInOne1: "Comprehensive Perspective",
    allInOne2: "Efficient Collaboration",
    allInOne3: "Diverse Intelligence",
    feature1Title: "Top Global AIs at Your Fingertips",
    feature1Desc: "One subscription for GPT, Claude, Gemini, DeepSeek, Qwen and more. No multiple accounts or subscriptions needed.",
    feature2Title: "Creativity · Research · Analysis · Decision",
    feature2Desc: "Connect inspiration, research, and analysis in one interface. No need to switch platforms or repeat questions.",
    feature3Title: "Clearer Thinking, Better Decisions",
    feature3Desc: "Identify AI hallucinations through side-by-side comparison. Multi-dimensional verification gives you confidence in your decisions.",
    feature4Title: "Prompt Enhancement & Summary",
    feature4Desc: "Not sure how to ask? Try 'Prompt Enhancement'. 'One-click Summary' quickly summarizes all AI responses to find differences.",
    feature1Image: "https://api.imghippo.com/files/Kqdi5676UU.png",
    feature2Image: "https://api.imghippo.com/files/YFh9051YY.png",
    feature3Image: "https://api.imghippo.com/files/AOC3313BQ.png",
    feature4Image: "https://api.imghippo.com/files/TDQY7509Fg.png",
    linkText: "Try for Free Now",
    testimonialsTitle: "User Reviews",
    faqTitle: "FAQ",
    navbarRegister: "Register",
    footerBadge: "Limited Offer",
    footerCta: "Register Now for Benefits",
    footerPromo: "Sign up now and get 115 credits (including 15 premium models).",
    footerDesc: "DiffMind is a multi-model AI comparison tool for learning, writing, creative exploration, and complex analysis.",
    footerLink1: "About DiffMind",
    footerLink2: "Official Introduction",
    footerCopyright: "Official DiffMind Website | Email: info@diffmind.ai",
    reviews: [
      {
        name: "Ava Fang",
        role: "Influencer",
        text: "I used to struggle with writer's block. DiffMind is a lifesaver! It's like having three different screenwriters working for me at once. The ideas from different AIs combine into exactly what I need.",
        avatar: "https://api.imghippo.com/files/czC2809bZw.png"
      },
      {
        name: "Jason Liu",
        role: "Copywriter",
        text: "GPT is serious, Claude is artistic, and Gemini is witty. DiffMind brings them all together for comparison, and the results are more reliable than I ever expected.",
        avatar: "https://api.imghippo.com/files/BAsC5978eGA.png"
      },
      {
        name: "Ethan Brooks",
        role: "User Ops",
        text: "Never thought DiffMind could save so much brainpower. I used to scratch my head for plans, now I just let the AIs compete. I just nod and approve. Comfortable.",
        avatar: "https://api.imghippo.com/files/czC2809bZw.png"
      },
      {
        name: "Leo Park",
        role: "Product Manager",
        text: "Honestly, I thought this tool was redundant at first. But after a week, I run everything through DiffMind before starting a requirement. It's not just faster, it's about opening up my perspective.",
        avatar: "https://api.imghippo.com/files/BAsC5978eGA.png"
      },
      {
        name: "Linda Wang",
        role: "Creator",
        text: "Writer's block is the worst. DiffMind gives me multiple styles of drafts at once. I just polish them, and my efficiency has more than doubled.",
        avatar: "https://api.imghippo.com/files/czC2809bZw.png"
      },
      {
        name: "Kevin Zhang",
        role: "Researcher",
        text: "When summarizing complex academic literature, different models have different focuses. DiffMind lets me cross-verify key info quickly.",
        avatar: "https://api.imghippo.com/files/BAsC5978eGA.png"
      }
    ],
    faqs: [
      {
        q: "What is DiffMind?",
        a: "DiffMind is a multi-model AI comparison workbench that aggregates top models to help you ask, compare, verify, and settle conclusions in one interface."
      },
      {
        q: "Who is DiffMind for?",
        a: "Students, creators, knowledge workers, entrepreneurs, product managers, and developers who need deep thinking and high-quality decisions."
      },
      {
        q: "What can I use DiffMind for?",
        a: "Complex problem analysis, academic research, business strategy, content creation, and creative inspiration using multiple top AI models."
      },
      {
        q: "Do I need to know AI to use DiffMind?",
        a: "No. Just ask your question and get answers from different perspectives from GPT, Gemini, Claude, etc. Easy to start, huge room for growth."
      },
      {
        q: "Difference between DiffMind and ChatGPT/Gemini/Claude?",
        a: "DiffMind doesn't replace them; it upgrades how you use them by calling multiple models at once for efficient, multi-perspective conclusions."
      },
      {
        q: "Why compare multiple AI answers?",
        a: "Different models have different strengths. DiffMind helps you find biases, avoid misinformation, and get more reliable conclusions, reducing decision risks."
      }
    ]
  }
};

export default function App() {
  const [lang, setLang] = useState('zh');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <AllInOne t={t} />
      
      <FeatureBlock 
        title={t.feature1Title}
        description={t.feature1Desc}
        image={t.feature1Image}
        linkText={t.linkText}
      />
      
      <FeatureBlock 
        title={t.feature2Title}
        description={t.feature2Desc}
        image={t.feature2Image}
        linkText={t.linkText}
      />
 
       <FeatureBlock 
        title={t.feature3Title}
        description={t.feature3Desc}
        image={t.feature3Image}
        linkText={t.linkText}
      />
 
      <FeatureBlock 
        title={t.feature4Title}
        description={t.feature4Desc}
        image={t.feature4Image}
        linkText={t.linkText}
      />
 
      
      <Testimonials t={t} />
      <FAQ t={t} />
      <Footer t={t} />
    </div>
  );
}
