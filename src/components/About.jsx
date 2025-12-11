const About = () => {
    return (
        <section id="about" className="min-h-screen py-32 px-0 w-[90%] mx-auto relative z-20">
            {/* Title */}
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-20 tracking-tighter font-montserrat">ABOUT ME</h2>

            <div className="flex flex-col md:flex-row gap-16 item-start">
                {/* Left Column: Image Only */}
                <div className="w-full md:w-1/3">
                    <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden border border-white/10 relative group">
                        <img
                            src="/me.jpg"
                            alt="Eom Jiwon"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            onError={(e) => { e.target.style.display = 'none' }}
                        />
                    </div>
                </div>

                {/* Right Column: Tagline & Details Grid */}
                <div className="w-full md:w-2/3 flex flex-col justify-between">
                    {/* New Tagline */}
                    <div className="mb-16">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white/90">
                            호기심을 동력 삼아<br />
                            경험을 쌓아가는<br />
                            디자이너 <span className="font-bold text-white">엄지원</span>입니다
                        </h3>
                    </div>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {/* TOOL */}
                        <div>
                            <h4 className="text-lg font-bold text-white/40 mb-6 uppercase tracking-widest font-montserrat">Tool</h4>
                            <ul className="text-slate-300 space-y-2 font-light text-lg">
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
                            <h4 className="text-lg font-bold text-white/40 mb-6 uppercase tracking-widest font-montserrat">Experiences</h4>
                            <ul className="text-slate-300 space-y-4 font-light text-base">
                                <li className="flex gap-4">
                                    <span className="text-slate-500 min-w-12 font-mono pt-1 text-sm">2023~</span>
                                    <span className="break-keep">워너뮤직코리아 내부 유튜브 영상 제작 및 썸네일 디자인</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-slate-500 min-w-12 font-mono pt-1 text-sm">2023~</span>
                                    <span className="break-keep">이세계아이돌 주르르 컨텐츠 디자이너</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-slate-500 min-w-12 font-mono pt-1 text-sm">2025</span>
                                    <span className="break-keep">SM 리얼라이브 VR 안내영상 디자인</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-slate-500 min-w-12 font-mono pt-1 text-sm">2025</span>
                                    <span className="break-keep">현대 오토에버 전시 UX 리소스 디자인</span>
                                </li>
                            </ul>
                        </div>

                        {/* EDUCATION */}
                        <div>
                            <h4 className="text-lg font-bold text-white/40 mb-6 uppercase tracking-widest font-montserrat">Education</h4>
                            <ul className="text-slate-300 space-y-2 font-light text-lg">
                                <li>성신여자대학교 졸업 예정</li>
                                <li>광양제철고등학교 졸업</li>
                            </ul>
                        </div>

                        {/* CERTIFICATE */}
                        <div>
                            <h4 className="text-lg font-bold text-white/40 mb-6 uppercase tracking-widest font-montserrat">Certificate</h4>
                            <ul className="text-slate-300 space-y-2 font-light text-base">
                                <li><span className="text-slate-500 text-sm mr-3 font-mono">2024</span> 자동차 운전면허 2종</li>
                                <li><span className="text-slate-500 text-sm mr-3 font-mono">2022</span> 컴퓨터 활용 능력 2급</li>
                                <li><span className="text-slate-500 text-sm mr-3 font-mono">2021</span> 워드 프로세서</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
