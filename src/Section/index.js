import "./style.css"

const Section = ({ title, extraHeaderContent, body }) => (
    <section className="section">
        <div className = "section__header">
        <div className="section__title">{title}</div>
        {extraHeaderContent}
        </div>
        <div className="section__body">
            {body}
        </div>
        
    </section>
);

export default Section;