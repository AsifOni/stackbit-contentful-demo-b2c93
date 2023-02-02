/* Custom imports */
import { Card } from './Card';

export const ThreeColumnCard = (props) => {
    const { title, caption, columnData } = props;

    return (
        <div className="md:container mx-auto pad">
            {title && <h2 className="text-center text-blue-charcoal text-xl font-bold mb-8">{title}</h2>}

            {caption && <p className="leading-normal text-abbey mb-4">{caption}</p>}

            <div className="flex flex-row flex-wrap space-x-5 md:flex-nowrap">
                {columnData?.map((column, idx) => {
                    const { image, title, subCopy, entireColumnLink, theme = 'left' } = column;

                    return (
                        <Card
                            key={`columnComp-${idx}`}
                            imageMeta={image}
                            entireColumnLink={entireColumnLink}
                            title={title}
                            subCopy={subCopy}
                            theme={theme}
                        />
                    );
                })}
            </div>
        </div>
    );
};
