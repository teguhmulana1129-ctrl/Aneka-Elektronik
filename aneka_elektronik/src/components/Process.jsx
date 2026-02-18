import React from 'react';
import { MessageSquare, Search, Wrench, CheckCircle, Headphones } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollReveal from '../hooks/useScrollReveal';

const Process = () => {
    const { t } = useTranslation();
    const steps = [
        {
            num: "01",
            icon: <MessageSquare size={24} />,
            titleKey: "process.steps.contact.title",
            descKey: "process.steps.contact.desc"
        },
        {
            num: "02",
            icon: <Search size={24} />,
            titleKey: "process.steps.diagnosis.title",
            descKey: "process.steps.diagnosis.desc"
        },
        {
            num: "03",
            icon: <Wrench size={24} />,
            titleKey: "process.steps.repair.title",
            descKey: "process.steps.repair.desc"
        },
        {
            num: "04",
            icon: <CheckCircle size={24} />,
            titleKey: "process.steps.testing.title",
            descKey: "process.steps.testing.desc"
        },
        {
            num: "05",
            icon: <Headphones size={24} />,
            titleKey: "process.steps.support.title",
            descKey: "process.steps.support.desc"
        }
    ];

    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="process" className="section section-light" ref={ref}>
            <div className="container">
                <h2 className="section-title">{t('process.title')}</h2>
                <p className="section-subtitle">{t('process.subtitle')}</p>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="process-card">
                            <div className="process-header">
                                <div className="process-icon-box">
                                    {step.icon}
                                </div>
                                <span className="process-num">{step.num}</span>
                            </div>
                            <div className="process-body">
                                <h3>{t(step.titleKey)}</h3>
                                <p>{t(step.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
