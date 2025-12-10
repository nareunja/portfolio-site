const About = () => {
    return (
        <section id="about" className="min-h-screen py-32 px-0 w-[90%] mx-auto relative z-20">
            {/* Title */}
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-20 tracking-tighter font-montserrat">ABOUT ME</h2>

            <div className="flex flex-col md:flex-row gap-16">
                {/* Left Column: Image & Personal Info */}
                <div className="w-full md:w-1/3 flex flex-col gap-8">
                    <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group">
                        {/* Fallback placeholder if image is missing */}
                        <div className="absolute inset-0 flex items-center justify-center text-slate-600 font-mono text-sm bg-black/50">
                            /profile.jpg
                        </div>
                        <img
                            src="/profile.jpg"
                            alt="Eom Jiwon"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity relative z-10"
                            onError={(e) => { e.target.style.display = 'none' }}
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">엄지원 <span className="text-slate-500 text-lg font-normal">Eom Jiwon</span></h3>
                        <p className="text-slate-400 text-sm mt-4">2003.02.13</p>
                        <p className="text-slate-400 text-sm">wldnjsdpqh@naver.com</p>
                        <p className="text-slate-400 text-sm">010 8403 0695</p>
                    </div>
                </div>

                {/* Right Column: Details Grid */}
                <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* TOOL */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-4 inline-block pr-12">TOOL</h4>
                        <ul className="text-slate-300 space-y-2 font-light">
                            <li>Adobe Photoshop 2024</li>
                            <li>Adobe Illustrator 2024</li>
                            <li>Adobe AfterEffect 2024</li>
                            <li>Adobe Premiere Pro 2024</li>
                            <li>Figma</li>
                            <li>Blender</li>
                            <li>Unity</li>
                        </ul>
                    </div>

                    {/* EXPERIENCES */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-4 inline-block pr-12">EXPERIENCES</h4>
                        <ul className="text-slate-300 space-y-4 font-light">
                            <li className="flex gap-4">
                                <span className="text-slate-500 text-sm min-w-12 font-mono pt-1">2023~</span>
                                <span className="break-keep">워너뮤직코리아 내부 유튜브 영상 제작 및 썸네일 디자인</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-slate-500 text-sm min-w-12 font-mono pt-1">2023~</span>
                                <span className="break-keep">이세계아이돌 주르르 컨텐츠 디자이너</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-slate-500 text-sm min-w-12 font-mono pt-1">2025</span>
                                <span className="break-keep">SM 리얼라이브 VR 안내영상 디자인</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-slate-500 text-sm min-w-12 font-mono pt-1">2025</span>
                                <span className="break-keep">현대 오토에버 전시 UX 리소스 디자인</span>
                            </li>
                        </ul>
                    </div>

                    {/* EDUCATION */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-4 inline-block pr-12">EDUCATION</h4>
                        <ul className="text-slate-300 space-y-2 font-light">
                            <li>성신여자대학교 졸업 예정</li>
                            <li>광양제철고등학교 졸업</li>
                        </ul>
                    </div>

                    {/* CERTIFICATE */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-6 border-b border-white/20 pb-4 inline-block pr-12">CERTIFICATE</h4>
                        <ul className="text-slate-300 space-y-2 font-light">
                            <li><span className="text-slate-500 text-sm mr-3 font-mono">2024</span> 자동차 운전면허 2종</li>
                            <li><span className="text-slate-500 text-sm mr-3 font-mono">2022</span> 컴퓨터 활용 능력 2급</li>
                            <li><span className="text-slate-500 text-sm mr-3 font-mono">2021</span> 워드 프로세서</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
