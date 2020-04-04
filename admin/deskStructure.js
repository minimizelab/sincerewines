import S from '@sanity/desk-tool/structure-builder';
import { IoMdHome, IoMdSettings } from 'react-icons/io';

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
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['settings', 'homePage'].includes(listItem.getId())
      ),
    ]);
