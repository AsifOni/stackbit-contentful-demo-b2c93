/* Custom imports */
import { Card } from './Card.jsx';

export const ThreeColumnCard = (props) => {
    const { title, caption, columnData } = props;

    return (
        <div className="md:container mx-auto pad" data-sb-object-id={props.id}>
            {title && <h2 className="text-center text-blue-charcoal text-xl font-bold mb-8">{title}</h2>}

            {caption && <p className="leading-normal text-abbey mb-4">{caption}</p>}

            <div className="flex flex-row flex-wrap space-x-5 md:flex-nowrap">
                {columnData?.map((column, idx) => {
                    const { image, title, subCopy, columnLink, theme = 'left' } = column;

                    return (                        
                        {/* <Card
                            key={`columnComp-${idx}`}
                            imageMeta={image}
                            columnLink={columnLink}
                            title={title}
                            subCopy={subCopy}
                            theme={theme}
                        /> */}
                        </>
                    );
                })}
            </div>
        </div>
    );
};
