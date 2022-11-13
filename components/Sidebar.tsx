import { SEARCH_TYPE } from "app/types";

const Sidebar = ({
  q,
  type = SEARCH_TYPE.CODE.toLocaleLowerCase(),
}: {
  q: string;
  type: string;
}) => {
  const SidebarItem = ({
    text,
    count,
    isActive,
    isHaveBottom,
  }: {
    text: string;
    count: number;
    isActive: boolean;
    isHaveBottom: boolean;
  }) => {
    const activeClassName = isActive ? "border-l-2 border-indigo-600" : "";
    const borderButtomClassName = isHaveBottom
      ? "border-b !border-b-gray-300"
      : "";
    return (
      <>
        <div className={`w=full ${activeClassName} ${borderButtomClassName}`}>
          <a
            href={`/?q=${q}&type=${text.toLowerCase()}`}
            className="flex flex-row items-center justify-between w-full px-4 py-2"
          >
            <p>{text}</p>
            {count >= 0 && <p>{count}</p>}
          </a>
        </div>
      </>
    );
  };
  return (
    <>
      <nav className="flex flex-col w-full border border-gray-300 rounded ">
        <SidebarItem
          text={SEARCH_TYPE.REPO}
          count={0}
          isActive={type === SEARCH_TYPE.REPO.toLocaleLowerCase()}
          isHaveBottom={true}
        ></SidebarItem>
        <SidebarItem
          text={SEARCH_TYPE.CODE}
          count={0}
          isActive={type === SEARCH_TYPE.CODE.toLocaleLowerCase()}
          isHaveBottom={true}
        ></SidebarItem>
        <SidebarItem
          text={SEARCH_TYPE.USER}
          count={0}
          isActive={type === SEARCH_TYPE.USER.toLocaleLowerCase()}
          isHaveBottom={false}
        ></SidebarItem>
      </nav>
    </>
  );
};

export default Sidebar;
