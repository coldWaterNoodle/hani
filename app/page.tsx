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
        <div className="min-h-screen bg-gray-50" data-oid="7ji5p4h">
            {/* Header */}
            <div className="bg-white border-b border-gray-200" data-oid="j8h:jgz">
                <div className="max-w-6xl mx-auto px-4" data-oid=":b9h5ml">
                    <div className="flex items-center justify-between py-4" data-oid="_ze9eot">
                        <div className="flex items-center space-x-8" data-oid="kplata:">
                            <div className="text-2xl font-bold text-blue-600" data-oid="fdq1qek">
                                하니병원
                                <div
                                    className="text-xs text-gray-500 font-normal"
                                    data-oid="df9gdfj"
                                >
                                    HANI HOSPITAL
                                </div>
                            </div>
                            <nav className="hidden md:flex space-x-8" data-oid="rrkf2_:">
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-600"
                                    data-oid="aa0ouuo"
                                >
                                    병원소개
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-600"
                                    data-oid="hbz6k1i"
                                >
                                    AI 의료서비스
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-600"
                                    data-oid="rg5noeq"
                                >
                                    채용 공고
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-600"
                                    data-oid="jhpmph-"
                                >
                                    예약 안내
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-700 hover:text-blue-600"
                                    data-oid=":i824du"
                                >
                                    Q&A
                                </a>
                                <a
                                    href="#"
                                    className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
                                    data-oid="hxotjp6"
                                >
                                    공지사항
                                </a>
                            </nav>
                        </div>
                        <div className="text-sm text-gray-600" data-oid="2i_xb8p">
                            <div data-oid="4u8qci4">고객센터 문의전화</div>
                            <div data-oid="nprv-2i">이메일문의 | 로그아웃</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8" data-oid="x5xac71">
                <div className="flex gap-8" data-oid="lo_0l_2">
                    {/* Main Content */}
                    <div className="flex-1 bg-white rounded-lg shadow-sm" data-oid="9j39p4h">
                        <div className="p-6" data-oid="s-ldbsn">
                            <h1
                                className="text-2xl font-bold text-gray-800 mb-6"
                                data-oid="b1e41:4"
                            >
                                공지사항
                            </h1>

                            {/* Search Bar */}
                            <div className="flex justify-end mb-4" data-oid="o:kcs34">
                                <div
                                    className="flex items-center border border-gray-300 rounded"
                                    data-oid=".ixk4n."
                                >
                                    <input
                                        type="text"
                                        placeholder="검색어를 입력하세요"
                                        className="px-3 py-2 w-64 outline-none"
                                        data-oid="5jf0sn9"
                                    />

                                    <button
                                        className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
                                        data-oid="vb27dee"
                                    >
                                        검색
                                    </button>
                                </div>
                            </div>

                            {/* Announcements List */}
                            <div className="space-y-3" data-oid=":.h3t-:">
                                {announcements.map((announcement) => (
                                    <div
                                        key={announcement.id}
                                        className="flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                                        data-oid="-8_oisr"
                                    >
                                        <div className="text-gray-800" data-oid="_x7gqd.">
                                            {announcement.title}
                                        </div>
                                        <div className="text-gray-500 text-sm" data-oid="29vmcx4">
                                            {announcement.date}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex justify-center mt-8" data-oid="ekn0qsy">
                                <div className="flex items-center space-x-2" data-oid="gwq_lt-">
                                    <button
                                        className="px-3 py-1 text-gray-500 hover:text-blue-600"
                                        data-oid=":j964uy"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        className="px-3 py-1 bg-blue-600 text-white rounded"
                                        data-oid="x2-ystd"
                                    >
                                        1
                                    </button>
                                    <button
                                        className="px-3 py-1 text-gray-500 hover:text-blue-600"
                                        data-oid="g:-8j.8"
                                    >
                                        2
                                    </button>
                                    <button
                                        className="px-3 py-1 text-gray-500 hover:text-blue-600"
                                        data-oid="h2.nmcg"
                                    >
                                        3
                                    </button>
                                    <button
                                        className="px-3 py-1 text-gray-500 hover:text-blue-600"
                                        data-oid="72b-vff"
                                    >
                                        4
                                    </button>
                                    <button
                                        className="px-3 py-1 text-gray-500 hover:text-blue-600"
                                        data-oid="el_znok"
                                    >
                                        5
                                    </button>
                                    <button
                                        className="px-3 py-1 text-gray-500 hover:text-blue-600"
                                        data-oid=".x_8fcm"
                                    >
                                        ›
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="w-80" data-oid="zreasma">
                        <div className="bg-white rounded-lg shadow-sm p-6" data-oid="qyrl3j6">
                            <div
                                className="flex items-center justify-between mb-4"
                                data-oid="8e7ar_i"
                            >
                                <h2 className="text-lg font-semibold" data-oid="-s3oe3o">
                                    이용자
                                </h2>
                                <span className="text-sm text-gray-500" data-oid="z7c_5:b">
                                    PC
                                </span>
                            </div>
                            <div className="mb-4" data-oid="9:diq8w">
                                <div className="text-sm text-gray-600" data-oid="ph5qtah">
                                    페이지
                                </div>
                                <div className="text-lg font-medium" data-oid="lvzaphj">
                                    1
                                </div>
                            </div>

                            <h3 className="font-semibold mb-3" data-oid="y7u_8s3">
                                Description
                            </h3>
                            <div className="space-y-2" data-oid="z0eeiiv">
                                {descriptions.map((desc, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-2"
                                        data-oid="2n4s:.d"
                                    >
                                        <span
                                            className="text-red-500 text-sm mt-1"
                                            data-oid="eow1lzk"
                                        >
                                            •
                                        </span>
                                        <span className="text-sm text-gray-700" data-oid=":hagib6">
                                            {desc}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-blue-100 mt-12" data-oid="q6g7su6">
                <div className="max-w-6xl mx-auto px-4 py-8" data-oid="fb4.xzi">
                    <div className="flex justify-between items-start" data-oid=":z9hgf.">
                        <div className="flex space-x-4" data-oid=".uwr:d0">
                            <div
                                className="w-8 h-8 bg-gray-400 rounded-full"
                                data-oid="1g154r1"
                            ></div>
                            <div
                                className="w-8 h-8 bg-gray-400 rounded-full"
                                data-oid="h56l:se"
                            ></div>
                            <div
                                className="w-8 h-8 bg-gray-400 rounded-full"
                                data-oid=":t3.cya"
                            ></div>
                        </div>
                        <div className="text-center" data-oid="_wq3m:5">
                            <div className="text-sm text-gray-600" data-oid="9e3._u4">
                                <div data-oid="n1i:z7h">하니병원 | Q&A | 이용약관</div>
                                <div data-oid="u:88c2j">이용약관 | 개인정보 보호정책</div>
                                <div data-oid="-:_6d0l">문의전화 : admin@hanihospital.com</div>
                            </div>
                        </div>
                        <div className="text-right text-sm text-gray-600" data-oid="9tskw-f">
                            <div data-oid=":7f6on2">서울시 강남구 어디든지 길어디</div>
                            <div data-oid="ot4bro8">Tel 02) 1234-5678</div>
                            <div data-oid="crsamg0">Email) hani@hanihospital.com</div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
