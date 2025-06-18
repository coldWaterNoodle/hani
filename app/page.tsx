'use client';

import { useState } from 'react';

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);

    const announcements = [
        { id: 1, title: '하니병원 채용 공고', date: '2024.11.01' },
        { id: 2, title: '병원 서비스 품질 안내', date: '2024.10.15' },
        { id: 3, title: '이용약관 변경 안내', date: '2024.09.30' },
        { id: 4, title: '채용설명 세미나 추가 안내', date: '2024.09.04' },
        { id: 5, title: '이용약관 개정 안내', date: '2024.08.11' },
        { id: 6, title: '하니병원 서비스 품질 안내', date: '2024.07.11' },
    ];

    const descriptions = [
        '공지사항 게시 관리',
        '공지사항 업데이트 및 수정',
        '의료진 · 병원 정보 업데이트',
        '시설관리 및 예약 시스템 관련 업무 안내 및 공지',
        '공지 내용 관리',
        '병원 내 새로운 정책',
        '대외 병원사업 이슈',
        '내부시설 및 장비 관련 공지',
        '공지사항 게시 및 수정 관련 업무',
        '새 공지를 작성하는 업무의 이슈',
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-8">
                            <div className="text-2xl font-bold text-blue-600">
                                하니병원
                                <div className="text-xs text-gray-500 font-normal">
                                    HANI HOSPITAL
                                </div>
                            </div>
                            <nav className="hidden md:flex space-x-8">
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    병원소개
                                </a>
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    AI 의료서비스
                                </a>
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    채용 공고
                                </a>
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    예약 안내
                                </a>
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    Q&A
                                </a>
                                <a
                                    href="#"
                                    className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
                                >
                                    공지사항
                                </a>
                            </nav>
                        </div>
                        <div className="text-sm text-gray-600">
                            <div>고객센터 문의전화</div>
                            <div>이메일문의 | 로그아웃</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex gap-8">
                    {/* Main Content */}
                    <div className="flex-1 bg-white rounded-lg shadow-sm">
                        <div className="p-6">
                            <h1 className="text-2xl font-bold text-gray-800 mb-6">공지사항</h1>

                            {/* Search Bar */}
                            <div className="flex justify-end mb-4">
                                <div className="flex items-center border border-gray-300 rounded">
                                    <input
                                        type="text"
                                        placeholder="검색어를 입력하세요"
                                        className="px-3 py-2 w-64 outline-none"
                                    />

                                    <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700">
                                        검색
                                    </button>
                                </div>
                            </div>

                            {/* Announcements List */}
                            <div className="space-y-3">
                                {announcements.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                                    >
                                        <div className="text-gray-800">{announcement.title}</div>
                                        <div className="text-gray-500 text-sm">
                                            {announcement.date}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center mt-8">
                                <div className="flex items-center space-x-2">
                                    <button className="px-3 py-1 text-gray-500 hover:text-blue-600">
                                        ‹
                                    </button>
                                    <button className="px-3 py-1 bg-blue-600 text-white rounded">
                                        1
                                    </button>
                                    <button className="px-3 py-1 text-gray-500 hover:text-blue-600">
                                        2
                                    </button>
                                    <button className="px-3 py-1 text-gray-500 hover:text-blue-600">
                                        3
                                    </button>
                                    <button className="px-3 py-1 text-gray-500 hover:text-blue-600">
                                        4
                                    </button>
                                    <button className="px-3 py-1 text-gray-500 hover:text-blue-600">
                                        5
                                    </button>
                                    <button className="px-3 py-1 text-gray-500 hover:text-blue-600">
                                        ›
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-80">
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-semibold">이용자</h2>
                                <span className="text-sm text-gray-500">PC</span>
                            </div>
                            <div className="mb-4">
                                <div className="text-sm text-gray-600">페이지</div>
                                <div className="text-lg font-medium">1</div>
                            </div>

                            <h3 className="font-semibold mb-3">Description</h3>
                            <div className="space-y-2">
                                {descriptions.map((desc, index) => (
                                    <div key={index} className="flex items-start space-x-2">
                                        <span className="text-red-500 text-sm mt-1">•</span>
                                        <span className="text-sm text-gray-700">{desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-blue-100 mt-12">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex justify-between items-start">
                        <div className="flex space-x-4">
                            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-gray-600">
                                <div>하니병원 | Q&A | 이용약관</div>
                                <div>이용약관 | 개인정보 보호정책</div>
                                <div>문의전화 : admin@hanihospital.com</div>
                            </div>
                        </div>
                        <div className="text-right text-sm text-gray-600">
                            <div>서울시 강남구 어디든지 길어디</div>
                            <div>Tel 02) 1234-5678</div>
                            <div>Email) hani@hanihospital.com</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
