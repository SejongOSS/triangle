import React, { useInsertionEffect, useRef } from "react";
import "./DescriptionChatBotPage.css";
import { ChatBot } from "../../components/ChatBot/ChatBot";
import { useScroll, useTransform } from "framer-motion";
import { motion,useInView } from "framer-motion";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { FeatureCard } from "../../components/FeatureCard/FeatureCard";
import {
  Clock,
  Globe,
  MessageSquare,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { TestimonialCard } from "../../components/TestimonialCard/TestimonialCard";
import chatbotImage from "../../assets/images/chatbot_image.png";

function DescriptionChatBotPage() {
  const targetRef = useRef(null);
  const demoRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const isDemoInView = useInView(demoRef, {
    margin: '-100px',
    amount: 0.5,
  })

  return (
    <div className="landing-page">
      <ChatBot highlight={isDemoInView}/>
      <motion.section
        ref={targetRef}
        className="section hero-section"
        style={{ opacity, scale, y }}
      >
        <div className="floating-shapes">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="shape"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            '세모'만의 AI 챗봇으로
            <br />
            동아리 검색의 혁신을 경험하세요
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            24시간 지원, 실시간 응답, 개인화된 경험을 제공하는 <br></br>최첨단
            AI 챗봇 솔루션을 만나보세요.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="hero-button">지금 시작하기</button>
          </motion.div>
        </div>
      </motion.section>

      <section className="section features-section">
        <SectionTitle
          title="강력한 기능"
          subtitle="AI 기반 챗봇으로 당신에게 맞는 동아리를 찾아보세요"
        />

        <div className="features-grid">
          <FeatureCard
            icon={Zap}
            title="실시간 응답"
            description="고객의 질문에 즉시 응답하여 대기 시간을 최소화합니다."
            delay={0.1}
          />
          <FeatureCard
            icon={Shield}
            title="안전한 대화"
            description="모든 대화는 개인 컴퓨터에서만 동작하며 새로고침 시 기록은 삭제됩니다."
            delay={0.2}
          />
          <FeatureCard
            icon={Clock}
            title="24/7 지원"
            description="하루 24시간, 일주일 내내 중단 없는 동아리 질문 검색 서비스를 제공합니다."
            delay={0.3}
          />
          <FeatureCard
            icon={Sparkles}
            title="AI 학습"
            description="대화를 통해 지속적으로 학습하고 개선되는 지능형 시스템입니다."
            delay={0.4}
          />
          <FeatureCard
            icon={Globe}
            title="다국어 지원"
            description="전세계 사람과 원활한 소통이 가능한 다국어 지원 기능을 제공합니다."
            delay={0.5}
          />
          <FeatureCard
            icon={MessageSquare}
            title="맞춤형 대화"
            description="고객의 요구에 맞춰 개인화된 대화 경험을 제공합니다."
            delay={0.6}
          />
        </div>
      </section>
      <section className="section demo-section" ref={demoRef}>
        <div className="demo-container">
          <SectionTitle
            title="직접 경험해보세요"
            subtitle="오른쪽 하단의 챗봇 아이콘을 클릭하여 지금 바로 AI 챗봇을 체험해보세요"
          />

          <motion.div
            className="demo-image"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={chatbotImage}
              alt="챗봇 데모 이미지"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              width={800}
              height={500}
            />
          </motion.div>
        </div>
      </section>
      <section className="section testimonials-section">
        <SectionTitle
          title="체험 후기"
          subtitle="'세모'의 AI 챗봇을 사용한 학생들의 생생한 경험담을 확인하세요"
        />

        <div className="testimonials-grid">
          <TestimonialCard
            content="평소 어떤 동아리를 가입할지 고민을 많이 했었는데, 세모의 챗봇 덕분에 좋은 동아리에 가입해 즐거운 학교생활 보내고 있어요!"
            name="서상혁"
            title="프로 다이어터, 개발자 꿈나무"
            delay={0.1}
          />
          <TestimonialCard
            content="언제 어떤 질문을 해도 빠르게 답변해주는 챗봇 덕분에, 원하는 동아리의 모집 기간을 놓치지 않고 지원할 수 있었어요!"
            name="신혜연"
            title="극단적 비밀주의, 리버스 헬창"
            delay={0.2}
          />
          <TestimonialCard
            content="어떤 동아리가 있는지, 특징이 뭔지 물어보면 바로바로 알려주는 챗봇이 소개해주는 페이지 너무 좋아요! 세모 최고!"
            name="윤지영"
            title="엔샵 26기 지원자"
            delay={0.3}
          />
        </div>
      </section>
      <section className="section cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="cta-title">지금 바로 시작하세요</h2>
          <p className="cta-subtitle">
            AI 챗봇으로 당신에게 꼭 맞는 동아리와 함께 학교생활을 즐길 준비가
            되셨나요?
          </p>
          <button className="cta-button">무료로 시작하기</button>
        </motion.div>
      </section>
    </div>
  );
}

export { DescriptionChatBotPage };
