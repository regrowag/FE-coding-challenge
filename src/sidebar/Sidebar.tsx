import "./Sidebar.css";

type SidebarProps = {
  genres: string[];
};
export const Sidebar = ({ genres }: SidebarProps) => {
  return (
    <div className="cloneflix-sidebar">
      {genres.map((genre) => (
        <p>{genre}</p>
      ))}
    </div>
  );
};
