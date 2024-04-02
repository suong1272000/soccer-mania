import SelectedListItem from '@/components/atoms/SelectedListItem';
import Registry from './registry';
import HomeToolbar from '@/components/atoms/HomeToolbar';
import ContentBox from '@/components/atoms/ContentBox';
import { LayoutProps } from '../../.next/types/app/layout';

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <Registry>
      <div style={{ display: 'flex' }}>
        <SelectedListItem />
        <HomeToolbar />
        <ContentBox>{children}</ContentBox>
      </div>
    </Registry>
  );
};
export default DefaultLayout;
