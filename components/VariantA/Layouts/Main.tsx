// import NavigationHeader from "../Header";
import NavigationHeader from './Header';
import SideBar from './SideBar';

export default function Main(props: any) {
  return (
    <>
      <NavigationHeader />
      <SideBar>
        <div className="mt-20 min-h-screen max-w-screen-2xl mx-auto bg-gray-50">{props.children}</div>
      </SideBar>
    </>
  );
}
