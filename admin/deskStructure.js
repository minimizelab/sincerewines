import S from '@sanity/desk-tool/structure-builder';
import { IoMdHome, IoMdSettings, IoMdDocument } from 'react-icons/io';

export default () =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
    .items([
      S.listItem()
        .title('Settings')
        .icon(IoMdSettings)
        .child(S.editor().schemaType('settings').documentId('settings')),
      S.listItem()
        .title('Home Page')
        .icon(IoMdHome)
        .child(S.editor().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('About Us Page')
        .icon(IoMdDocument)
        .child(S.editor().schemaType('aboutUsPage').documentId('aboutUsPage')),
      S.listItem()
        .title('Orders Page')
        .icon(IoMdDocument)
        .child(S.editor().schemaType('ordersPage').documentId('ordersPage')),
      S.listItem()
        .title('Region Page')
        .icon(IoMdDocument)
        .child(S.editor().schemaType('regionPage').documentId('regionPage')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'settings',
            'homePage',
            'ordersPage',
            'regionPage',
            'aboutUsPage',
          ].includes(listItem.getId())
      ),
    ]);
