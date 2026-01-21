function Manifesto() {
    return (
        <section className="manifesto-section">
            <svg className="helmet-icon" viewBox="0 0 24 24">
                <path d="M12 2C7.5 2 4 5.5 4 10v2c0 4.4 3.6 8 8 8s8-3.6 8-8v-2c0-4.5-3.5-8-8-8z" />
                <path d="M4 10h16" />
                <path d="M9 14h6" />
            </svg>
            <h1 className="manifesto-text rubik-storm-regular">
                <span className="text-green">Redefining</span> Limits,<br />
                Fighting for <span className="text-green">Victories</span>,<br />
                Bringing Everything in<br />
                Every Sense.
            </h1>
        </section>
    );
}

export default Manifesto;
