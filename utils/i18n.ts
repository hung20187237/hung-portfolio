export const dictionary = {
    en: {
        nav: {
            about: "About",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            greeting: "Hi, my name is",
            name: "Trần Đức Hùng.",
            roles: [
                "I build things for the web.",
                "I build accessible products.",
                "I focus on React & Node.js."
            ],
            description: "I am a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I am focused on building accessible, human-centered products at ",
            company: "CYAI-NCS",
            cta: "Check out my work!"
        },
        about: {
            title: "About Me",
            intro: "My Intro",
            headline_1: "I am a developer who loves building ",
            headline_2: "products",
            bio: "My career objective is to become a professional Tech Lead, leveraging a solid foundation in full-stack programming experience to gain deeper insights into the product development process. I am committed to continuous learning and enhancing my skills in management and requirements analysis to deliver solutions that optimize product value while contributing to the sustainable growth of the organization.",
            degree: "Degree",
            degree_value: "IT Engineer",
            university: "University",
            university_value: "HUST",
            download_cv: "Download CV",
            services: {
                frontend: {
                    title: "Frontend Development",
                    desc: "Building responsive and interactive UIs using React, Next.js, and Tailwind CSS."
                },
                backend: {
                    title: "Backend Development",
                    desc: "Developing robust APIs and microservices with Node.js, Express, and Python."
                },
                devops: {
                    title: "DevOps & Cloud",
                    desc: "Automating deployments and managing infrastructure with Docker, AWS, and CI/CD."
                }
            },
            stats: {
                experience: "Years Experience",
                technologies: "Technologies Mastered",
                clients: "Clients Served",
                projects: "Projects Completed",
                satisfaction: "Client Satisfaction"
            }
        },
        experience: {
            title: "Where I've Worked",
            subtitle: "My Experience",
            education_title: "Education",
            list: [
                {
                    title: "Full-Stack Developer",
                    company: "CYAI-NCS",
                    period: "09/2023 - Present",
                    desc: "Full-stack Developer | Cybersecurity Products/Projects",
                    duties: [
                        "Proactively design and develop frontend platforms for enterprise digital transformation projects using ReactJS.",
                        "Developed and maintained frontend modules using ReactJS with Redux.",
                        "Collaborated closely with Back-end and cross-functional teams to clarify requirements.",
                        "Delivered responsive UI experiences through component development.",
                        "Mentored interns and new engineers."
                    ],
                    tech: ["ReactJS", "Redux", "TypeScript"]
                },
                {
                    title: "Web Developer",
                    company: "BKAV EDS",
                    period: "09/2022 - 09/2023",
                    desc: "Front-end Developer | Digital Transformation",
                    duties: [
                        "Built frontend platforms for enterprise digital transformation projects using ReactJS.",
                        "Designed and implemented a reusable component system with Styled Components.",
                        "Integrated APIs and handled cross-browser responsive layouts.",
                        "Maintained and optimized existing modules."
                    ],
                    tech: ["ReactJS", "Styled Components"]
                },
                {
                    title: "Web Developer",
                    company: "RABILOO",
                    period: "01/2022 - 09/2022",
                    desc: "Web Developer | Outsourcing (Japan & Singapore)",
                    duties: [
                        "Delivered e-commerce outsourcing projects using React.js / Vue.js / Node.js.",
                        "Implemented features like product listing, cart, checkout flow.",
                        "Contributed to both frontend & backend development (Node.js APIs).",
                        "Up-skilled on Next.js, applying SSR/SEO improvements."
                    ],
                    tech: ["React.js", "Vue.js", "Node.js", "Next.js"]
                }
            ],
            education_list: [
                {
                    school: "Hanoi University of Science and Technology",
                    degree: "Information Technology Engineer",
                    period: "08/2018 - 12/2023"
                }
            ]
        },
        projects: {
            title: "Some Things I've Built",
            subtitle: "My Work",
            freelance_title: "Freelance Work",
            freelance_subtitle: "Freelance Projects",
            github: "GitHub",
            demo: "Live Demo",
            learn_more: "Learn More",
            freelance_list: [
                {
                    title: "Gia Dụng Kichin",
                    meta: "E-Commerce Website",
                    desc: "An e-commerce platform specializing in authentic Japanese knives (KAI, Global, etc.) and premium kitchenware. Features a seamless shopping experience and product filtering.",
                    tech: ["ReactJS", "Next.JS", "Bootstrap"],
                    link: "https://giadungkichin.com/",
                    image: "/assets/projects/gia_dung_kichin.png"
                },
                {
                    title: "Tiệm Bút Signature",
                    meta: "Boutique Pen Store",
                    desc: "Elegant e-commerce storefront for a signature pen brand. Focused on high-quality visuals, responsive design, and smooth user journey.",
                    tech: ["ReactJS", "Vite", "TailwindCSS"],
                    link: "https://www.tiembutsignature.com/",
                    image: "/assets/projects/tiem_but_signature.png"
                },
                {
                    title: "NCS Group",
                    meta: "Cybersecurity Services Provider",
                    desc: "Official website for NCS Group, a cybersecurity firm. Designed to present their comprehensive services including SOC, Penetration Testing, EDR, and SIEM solutions.",
                    tech: ["ReactJS", "WordPress", "GSAP"],
                    link: "https://ncsgroup.vn/",
                    image: "/assets/projects/ncs_group.png"
                },
                {
                    title: "NCA",
                    meta: "Association Portal (Vietnam Cybersecurity Association)",
                    desc: "Web portal for the national cybersecurity association. Built to deliver news, events, and resources securely and efficiently.",
                    tech: ["ReactJS", "Ant Design", "Webpack"],
                    link: "https://nca.org.vn/",
                    image: "/assets/projects/nca.png"
                },
                {
                    title: "Lam Kinh 189",
                    meta: "Inspection and Certification Center",
                    desc: "Official portal for LAMKINH - an Inspection and Certification Center. Built a reliable and professional web interface to provide essential certification information and services.",
                    tech: ["ReactJS", "Vite", "Ant Design"],
                    link: "https://www.lamkinh189.com/",
                    image: "/assets/projects/lam_kinh_189.png"
                }
            ],
            list: [
                {
                    title: "AMAS",
                    meta: "Malware Analysis Platform",
                    desc: "Malware analysis platform built on MWDB, integrated with Karton to automate static/dynamic analysis. Delivered core workflows for malware sample management, analysis automation flow, and advanced search with Lucene-like queries.",
                    tech: ["MWDB", "Karton", "Redis", "Keycloak"],
                    image: "/assets/projects/amas-platform.png"
                },
                {
                    title: "OSINT 1, 2, 3",
                    meta: "Open Source Intelligence Platform",
                    desc: "Platform for collecting, searching, and visualizing open-source intelligence. Developed core frontend for data exploration, interactive dashboards, and advanced search workflows.",
                    tech: ["ReactJS", "Redux-Saga", "Antd"],
                    image: "/assets/projects/osint-dashboard.png"
                },
                {
                    title: "SOAR System",
                    meta: "Security Orchestration, Automation and Response",
                    desc: "Cybersecurity platform to monitor incidents and support response workflows. Developed responsive UI components and interactive dashboards to visualize security data.",
                    tech: ["ReactJS", "TypeScript", "Radix UI"],
                    image: "/assets/projects/soar-system.png"
                },
                {
                    title: "EDR System",
                    meta: "Endpoint Detection and Response",
                    desc: "Endpoint security monitoring platform upgraded from Wazuh. Enhanced UI components for security data visualization and optimized responsiveness.",
                    tech: ["ReactJS", "Python", "Wazuh"],
                    image: "/assets/projects/edr-dashboard.png"
                },
                {
                    title: "Lumina - BI",
                    meta: "Business Intelligence Platform",
                    desc: "Internal BI platform built on Apache Superset. Customized dashboards, chart configurations, and optimized rendering performance.",
                    tech: ["ReactJS", "Flask", "Superset"],
                    image: "/assets/projects/lumina-bi.png"
                },
                {
                    title: "CRM System",
                    meta: "Customer Relationship Management",
                    desc: "CRM platform for SMEs. Owned front-end development, implemented lead pipeline, task management, and integrated E-contract workflow.",
                    tech: ["ReactJS", "Redux-Saga", "Antd"],
                    image: "/assets/projects/crm-dashboard.png"
                }
            ]
        },
        skills: {
            title: "Technical Skills",
            subtitle: "My Expertise"
        },
        contact: {
            title: "Get In Touch",
            subtitle: "What's Next?",
            description: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            say_hello: "Say Hello",
            form: {
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                send: "Send Message",
                sending: "Sending...",
                success: "Message sent successfully!",
                error: "Failed to send message. Please try again."
            }
        },
        footer: {
            description: "Passionate Full-Stack Developer building modern, resilient, and user-centric web applications.",
            quick_links: "Quick Links",
            socials: "Socials",
            back_to_top: "Back to Top",
            rights: "All rights reserved."
        },
        chat: {
            title: "Community Chat",
            messages: "messages",
            empty_1: "Be the first to say hello!",
            join_label: "Enter your name to join the chat",
            join_placeholder: "Name...",
            join_btn: "Join",
            type_placeholder: "Type a message..."
        }
    },
    ja: {
        nav: {
            about: "私について",
            experience: "経歴",
            projects: "プロジェクト",
            skills: "スキル",
            contact: "お問い合わせ"
        },
        hero: {
            greeting: "こんにちは、私の名前は",
            name: "チャン・ドゥック・フンです。",
            roles: [
                "Webアプリケーションを構築しています。",
                "アクセシブルな製品を作ります。",
                "React & Node.jsに注力しています。"
            ],
            description: "私は、優れたデジタル体験の構築（および時折デザイン）を専門とするソフトウェアエンジニアです。現在は以下の場所で、アクセシブルで人間中心の製品の構築に注力しています: ",
            company: "CYAI-NCS",
            cta: "私の作品を見る！"
        },
        about: {
            title: "私について",
            intro: "自己紹介",
            headline_1: "私は",
            headline_2: "製品",
            headline_3: "を作るのが大好きな開発者です。",
            bio: "私のキャリアの目標は、フルスタックプログラミングの確かな経験を活かして製品開発プロセスについてより深い洞察を得ることで、プロフェッショナルなテックリードになることです。マネジメントと要件定義のスキルを継続的に学び高めることで、企業の持続的な成長に貢献しつつ、製品価値を最大化するソリューションを提供することに尽力します。",
            degree: "学位",
            degree_value: "ITエンジニア",
            university: "大学",
            university_value: "ハノイ工科大学 (HUST)",
            download_cv: "履歴書(CV)をダウンロード",
            services: {
                frontend: {
                    title: "フロントエンド開発",
                    desc: "React、Next.js、Tailwind CSSを使用して、レスポンシブでインタラクティブなUIを構築します。"
                },
                backend: {
                    title: "バックエンド開発",
                    desc: "Node.js、Express、Pythonを使用して、堅牢なAPIとマイクロサービスを開発します。"
                },
                devops: {
                    title: "DevOps & クラウド",
                    desc: "Docker、AWS、CI/CDを使用して、デプロイメントの自動化とインフラストラクチャの管理を行います。"
                }
            },
            stats: {
                experience: "年の経験",
                technologies: "習得した技術",
                clients: "サービス提供顧客",
                projects: "完了したプロジェクト",
                satisfaction: "顧客満足度"
            }
        },
        experience: {
            title: "職歴",
            subtitle: "私の経験",
            education_title: "学歴",
            list: [
                {
                    title: "フルスタック開発者",
                    company: "CYAI-NCS",
                    period: "09/2023 - 現在",
                    desc: "フルスタック開発者 | サイバーセキュリティ製品/プロジェクト",
                    duties: [
                        "ReactJSを使用してエンタープライズデジタルトランスフォーメーションプロジェクトのフロントエンドプラットフォームを主体的に設計および開発。",
                        "ReactJSとReduxを使用してフロントエンドモジュールを開発および維持。",
                        "バックエンドおよび部門横断チームと緊密に連携して要件を明確化。",
                        "コンポーネント開発を通じてレスポンシブなUI体験を提供。",
                        "インターンや新入社員の指導。"
                    ],
                    tech: ["ReactJS", "Redux", "TypeScript"]
                },
                {
                    title: "Web開発者",
                    company: "BKAV EDS",
                    period: "09/2022 - 09/2023",
                    desc: "フロントエンド開発者 | デジタルトランスフォーメーション",
                    duties: [
                        "ReactJSを使用してエンタープライズデジタルトランスフォーメーションプロジェクトのフロントエンドプラットフォームを構築。",
                        "Styled Componentsを使用して再利用可能なコンポーネントシステムを設計および実装。",
                        "APIを統合し、クロスブラウザのレスポンシブレイアウトを処理。",
                        "既存のモジュールの維持および最適化。"
                    ],
                    tech: ["ReactJS", "Styled Components"]
                },
                {
                    title: "Web開発者",
                    company: "RABILOO",
                    period: "01/2022 - 09/2022",
                    desc: "Web開発者 | アウトソーシング (日本 & シンガポール)",
                    duties: [
                        "React.js / Vue.js / Node.jsを使用してEコマースのアウトソーシングプロジェクトを納品。",
                        "製品リスト、カート、チェックアウトフローなどの機能を実装。",
                        "フロントエンドとバックエンド（Node.js API）の両方の開発に貢献。",
                        "Next.jsをスキルアップし、SSR/SEOの改善に適用。"
                    ],
                    tech: ["React.js", "Vue.js", "Node.js", "Next.js"]
                }
            ],
            education_list: [
                {
                    school: "ハノイ工科大学 (HUST)",
                    degree: "情報技術エンジニア",
                    period: "08/2018 - 12/2023"
                }
            ]
        },
        projects: {
            title: "構築したもの",
            subtitle: "私の作品",
            freelance_title: "フリーランスの仕事",
            freelance_subtitle: "その他のプロジェクト",
            github: "GitHub",
            demo: "ライブデモ",
            learn_more: "詳細を見る",
            freelance_list: [
                {
                    title: "Gia Dụng Kichin",
                    meta: "Eコマースウェブサイト",
                    desc: "本物の日本の包丁（KAI、Globalなど）や高級キッチン用品を専門とするEコマースプラットフォーム。シームレスなショッピング体験と製品フィルタリングを備えています。",
                    tech: ["ReactJS", "Next.JS", "Bootstrap"],
                    link: "https://giadungkichin.com/",
                    image: "/assets/projects/gia_dung_kichin.png"
                },
                {
                    title: "Tiệm Bút Signature",
                    meta: "ブティックペンストア",
                    desc: "シグネチャーペンブランドのためのエレガントなEコマースストアフロント。高品質のビジュアル、洗練されたデザイン、そしてスムーズなユーザー体験に重点を置いています。",
                    tech: ["ReactJS", "Vite", "TailwindCSS"],
                    link: "https://www.tiembutsignature.com/",
                    image: "/assets/projects/tiem_but_signature.png"
                },
                {
                    title: "NCS Group",
                    meta: "サイバーセキュリティサービス企業",
                    desc: "サイバーセキュリティ企業であるNCS Groupの公式ウェブサイト。SOC、ペネトレーションテスト、EDR、SIEMソリューションなどの包括的なサービスを紹介するように設計されています。",
                    tech: ["ReactJS", "WordPress", "GSAP"],
                    link: "https://ncsgroup.vn/",
                    image: "/assets/projects/ncs_group.png"
                },
                {
                    title: "NCA",
                    meta: "協会ポータル (ベトナムサイバーセキュリティ協会)",
                    desc: "国家サイバーセキュリティ協会のWebポータル。ニュース、イベント、リソースを安全かつ効率的に配信するために構築されました。",
                    tech: ["ReactJS", "Ant Design", "Webpack"],
                    link: "https://nca.org.vn/",
                    image: "/assets/projects/nca.png"
                },
                {
                    title: "Lam Kinh 189",
                    meta: "検査および認証センター",
                    desc: "検査および認証センターであるLAMKINHの公式ポータル。必須の認証情報とサービスを提供するための信頼性が高く専門的なWebインターフェイスを構築しました。",
                    tech: ["ReactJS", "Vite", "Ant Design"],
                    link: "https://www.lamkinh189.com/",
                    image: "/assets/projects/lam_kinh_189.png"
                }
            ],
            list: [
                {
                    title: "AMAS",
                    meta: "マルウェア分析プラットフォーム",
                    desc: "MWDB上に構築されたマルウェア分析プラットフォームで、Kartonと統合して静的/動的分析を自動化。マルウェアサンプルの管理、分析自動化フロー、およびLuceneクエリを使用した高度な検索のコアワークフローを作成。",
                    tech: ["MWDB", "Karton", "Redis", "Keycloak"],
                    image: "/assets/projects/amas-platform.png"
                },
                {
                    title: "OSINT 1, 2, 3",
                    meta: "オープンソース・インテリジェンス・プラットフォーム",
                    desc: "オープンソース・インテリジェンスの収集、検索、および視覚化のためのプラットフォーム。データ探索、インタラクティブなダッシュボード、高度な検索ワークフローのためのコアフロントエンドを開発。",
                    tech: ["ReactJS", "Redux-Saga", "Antd"],
                    image: "/assets/projects/osint-dashboard.png"
                },
                {
                    title: "SOAR System",
                    meta: "セキュリティ・オーケストレーション、自動化、対応",
                    desc: "インシデントを監視し、対応ワークフローをサポートするサイバーセキュリティプラットフォーム。レスポンシブなUIコンポーネントと、セキュリティデータを視覚化するためのインタラクティブなダッシュボードを開発。",
                    tech: ["ReactJS", "TypeScript", "Radix UI"],
                    image: "/assets/projects/soar-system.png"
                },
                {
                    title: "EDR System",
                    meta: "エンドポイント検知と対応",
                    desc: "Wazuhからアップグレードされたエンドポイントセキュリティ監視プラットフォーム。セキュリティデータの視覚化と最適化された応答性のためにUIコンポーネントを強化。",
                    tech: ["ReactJS", "Python", "Wazuh"],
                    image: "/assets/projects/edr-dashboard.png"
                },
                {
                    title: "Lumina - BI",
                    meta: "ビジネスインテリジェンス・プラットフォーム",
                    desc: "Apache Superset上に構築された社内BIプラットフォーム。カスタマイズされたダッシュボード、チャート構成、および最適化されたレンダリングパフォーマンス。",
                    tech: ["ReactJS", "Flask", "Superset"],
                    image: "/assets/projects/lumina-bi.png"
                },
                {
                    title: "CRM System",
                    meta: "顧客関係管理",
                    desc: "中小企業向けのCRMプラットフォーム。フロントエンド開発を担当し、リードパイプライン、タスク管理、および電子契約ワークフローの統合を実装。",
                    tech: ["ReactJS", "Redux-Saga", "Antd"],
                    image: "/assets/projects/crm-dashboard.png"
                }
            ]
        },
        skills: {
            title: "技術スキル",
            subtitle: "私の専門知識"
        },
        contact: {
            title: "お問い合わせ",
            subtitle: "次は何？",
            description: "現在、新しい機会を探しています。質問がある場合でも、単に挨拶したい場合でも、できる限り返信します！",
            say_hello: "挨拶する",
            form: {
                name: "名前",
                email: "メール",
                subject: "件名",
                message: "メッセージ",
                send: "メッセージを送信",
                sending: "送信中...",
                success: "メッセージが正常に送信されました！",
                error: "メッセージの送信に失敗しました。もう一度お試しください。"
            }
        },
        footer: {
            description: "モダンで回復力があり、ユーザー中心のWebアプリケーションを構築する情熱的なフルスタック開発者。",
            quick_links: "クイックリンク",
            socials: "ソーシャル",
            back_to_top: "トップに戻る",
            rights: "全著作権所有。"
        },
        chat: {
            title: "コミュニティチャット",
            messages: "メッセージ",
            empty_1: "最初に挨拶してみましょう！",
            join_label: "チャットに参加するには名前を入力してください",
            join_placeholder: "名前...",
            join_btn: "参加",
            type_placeholder: "メッセージを入力..."
        }
    }
};

export type Language = 'en' | 'ja';

// Helper function to resolve dot-notation paths
export const resolvePath = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};
