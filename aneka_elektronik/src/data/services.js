import tvImg from '../assets/television.webp';
import riceImg from '../assets/rice_cooker.webp';
import ironImg from '../assets/electric_iron.webp';

export const servicesData = [
    {
        id: 'tv-repair',
        title: "TV Repair",
        desc: "Expert repair for LED, LCD, and Smart TVs. Screen replacement, motherboard repair, and power issues.",
        details: "We provide comprehensive TV repair services for all major brands including Samsung, LG, Sony, and Sharp. Our technicians are skilled in diagnosing complex issues such as backlight failure, color distortion, sound issues, and connectivity problems. We use genuine parts to ensure longevity and picture quality restoration.",
        img: tvImg,
        longDescription: `
            <h3>Why Choose Our TV Repair Service?</h3>
            <p>Television technology is constantly evolving, and so are our repair methods. Whether you have a modern 4K OLED screen or a trusty LCD model, we have the tools and expertise to fix it.</p>
            <ul>
                <li><strong>Screen Issues:</strong> Cracked screens (if replacement is viable), dead pixels, and black screen problems.</li>
                <li><strong>Audio Problems:</strong> No sound, distorted audio, or broken speakers.</li>
                <li><strong>Power Failures:</strong> TV won't turn on, random restarts, or power supply board failures.</li>
                <li><strong>Smart Features:</strong> Wi-Fi connectivity issues and software glitches.</li>
            </ul>
        `
    },
    {
        id: 'rice-cooker-repair',
        title: "Rice Cooker Repair",
        desc: "Fixing heating issues, sensor faults, and digital control problems for all Magicom brands.",
        details: "Is your rice cooker not cooking properly or keeping rice warm? We fix common issues like thermal fuse blowouts, broken heating plates, and malfunctioning control panels. We service standard magicoms as well as advanced digital rice cookers from brands like Yong Ma, Cosmos, and Philips.",
        img: riceImg,
        longDescription: `
            <h3>Expert Care for Your Rice Cooker</h3>
            <p>A good rice cooker is the heart of an Asian kitchen. Don't let a breakdown disrupt your meals.</p>
            <ul>
                <li><strong>Heating Element Repair:</strong> Ensures your rice cooks evenly every time.</li>
                <li><strong>Thermostat Calibration:</strong> Prevents burnt or undercooked rice.</li>
                <li><strong>Control Board & Sensor Logic:</strong> Fixing error codes on digital models.</li>
                <li><strong>Lid & Latch Repair:</strong> Ensuring a perfect seal for optimal pressure.</li>
            </ul>
        `
    },
    {
        id: 'electric-iron-repair',
        title: "Electric Iron Repair",
        desc: "Fast service for heating elements, thermostat calibration, and cord replacement.",
        details: "From steam irons to dry irons, we handle it all. If your iron isn't heating up, is leaking water, or has a damaged cord, bring it to us. We also offer descaling services to remove mineral buildup and improve steam performance for a smoother ironing experience.",
        img: ironImg,
        longDescription: `
            <h3>Smooth Out the Wrinkles</h3>
            <p>A faulty iron isn't just annoying; it can ruin your clothes. We restore your iron to its best condition.</p>
            <ul>
                <li><strong>Heating Issues:</strong> Replacing burnt-out elements for consistent heat.</li>
                <li><strong>Thermostat Fixes:</strong> Accurate temperature control for delicate fabrics.</li>
                <li><strong>Steam System Maintenance:</strong> Unclogging vents and fixing leakages.</li>
                <li><strong>Safety Checks:</strong> Repairing frayed cords and loose connections to prevent electric shocks.</li>
            </ul>
        `
    }
];
