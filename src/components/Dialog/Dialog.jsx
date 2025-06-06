// Dialog 컴포넌트 - 개발팀 소개를 보여주는 모달 다이얼로그 컴포넌트
import React from 'react';
import './Dialog.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Zap, Database } from 'lucide-react';
import {ReactComponent as Github} from '../../assets/images/github-mark.svg'

// 개발자 정보 배열
const developers = [
  {
    name: "권오성",
    role: "Frontend Lead",
    skills: ["React", "Framer Motion", "랜딩페이지"],
    github: "https://github.com/ohsung0722",
    avatar: "OS",
    color: "from-purple-500 to-blue-500",
  },
  {
    name: "서상혁",
    role: "Backend Developer",
    skills: ["프롬프트 엔지니어링", "Chatbot 메인 로직"],
    github: "https://github.com/SangHyeok0908",
    avatar: "SH",
    color: "from-pink-500 to-purple-500",
  },
  {
    name: "신혜연",
    role: "Frontend Developer",
    skills: ["React", "D3.js", "메인페이지", "그래프"],
    github: "https://github.com/shymirr",
    avatar: "HY",
    color: "from-green-500 to-blue-500",
  },
  {
    name: "윤지영",
    role: "Frontend Developer",
    skills: ["React", "동아리 상세 페이지", "동아리 상세 정보"],
    github: "https://github.com/yoon764",
    avatar: "JY",
    color: "from-orange-500 to-red-500",
  },
]

// props 설명
// isOpen: 다이얼로그 표시 여부
// onClose: 다이얼로그 닫기 함수
function Dialog({ isOpen, onClose }) {
  // 오버레이 클릭 시 다이얼로그 닫기
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // 역할에 따른 아이콘 반환 함수
  const getRoleIcon = (role) => {
    if (role.includes("Frontend")) return <Code size={20} />
    if (role.includes("Backend")) return <Database size={20} />
    return <Zap size={20} />
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dialog-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className="dialog-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* 다이얼로그 헤더 */}
            <div className="dialog-header">
              <button className="dialog-close" onClick={onClose}>
                <X size={20} />
              </button>
              <h2 className="dialog-title">개발팀 소개</h2>
              <p className="dialog-subtitle">세모를 개발한 7조 조원들을 소개합니다</p>
            </div>

            {/* 개발자 카드 그리드 */}
            <div className="developers-grid">
              {developers.map((developer, index) => (
                <motion.div
                  key={developer.name}
                  className="developer-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {/* 개발자 아바타 */}
                  <div className="developer-avatar">{developer.avatar}</div>
                  {/* 개발자 이름 */}
                  <div className="developer-name">{developer.name}</div>
                  {/* 개발자 역할 */}
                  <div className="developer-role">
                    <span style={{ marginRight: "0.5rem" }}>{getRoleIcon(developer.role)}</span>
                    {developer.role}
                  </div>
                  {/* 개발자 스킬 태그 */}
                  <div className="developer-skills">
                    {developer.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* GitHub 링크 */}
                  <a href={developer.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    <Github className="github-icon" />
                    GitHub 프로필
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export {Dialog} 