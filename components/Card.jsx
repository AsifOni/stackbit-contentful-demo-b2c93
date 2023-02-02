import Link from 'next/link';

/* Custom imports */
import { CustomImage } from './CustomImage';

export const Card = (props) => {
    const themeClassMap = {
        container: {
            left: 'items-left',
            center: 'items-center',
        },
        typoGraphy: {
            left: 'text-left',
            center: 'text-center',
        },
    };
    const { imageMeta, title, subCopy, entireColumnLink, theme = 'left' } = props;

    const CardBody = () => {
        return (
            <div className={`flex flex-col ${themeClassMap.container[theme]}`}>
                <div className={`mt-2 mb-4`}>
                    <CustomImage theme={entireColumnLink ? 'rounded-xl' : ''} {...imageMeta} />
                </div>
                <h3 className="mb-3 text-blue-charcoal font-bold">{title}</h3>
                <p className={`leading-normal text-abbey ${themeClassMap.typoGraphy[theme]}`}>{subCopy}</p>
            </div>
        );
    };

    return (
        <>
            {entireColumnLink ? (
                <Link href={entireColumnLink}>
                    <a>
                        <CardBody />
                    </a>
                </Link>
            ) : (
                    <CardBody />
                )}
        </>
    );
};
