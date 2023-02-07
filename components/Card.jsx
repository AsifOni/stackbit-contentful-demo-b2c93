import React from 'react';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

/* Custom imports */
import { CustomImage } from './CustomImage.jsx';

export const Card = React.memo((props) => {
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
  const { imageMeta, title, subCopy, columnLink, theme = 'left' } = props;

  const options = {
    renderNode: {
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li key={`${node.content[0].content[0].value}'-key'`} className="text-base">
          {node.content[0].content[0].value}
        </li>
      ),
      [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc ml-5">{children}</ul>,
      [INLINES.HYPERLINK]: (node, children) => (
        <Link href={columnLink}>
          <a href={node.data.uri}>{children[0]}</a>
        </Link>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p key={`${children}'-key'`} className={`leading-normal text-abbey ${themeClassMap.typoGraphy[theme]}`}>
          {children}
        </p>
      ),
    },
  };

  const CardBody = () => {
    return (
      <div className={`flex flex-col ${themeClassMap.container[theme]}`}>
        <div className={`mt-2 mb-4`}>
          <CustomImage theme={columnLink ? 'rounded-xl' : ''} {...imageMeta} />
        </div>
        <h3 className="mb-3 text-blue-charcoal font-bold">{title}</h3>
        {subCopy && documentToReactComponents(subCopy, options)}
      </div>
    );
  };

  return (
    <>
      {columnLink ? (
        <Link href={columnLink}>
          <a>
            <CardBody />
          </a>
        </Link>
      ) : (
        <CardBody />
      )}
    </>
  );
});
