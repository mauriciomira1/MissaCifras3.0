import Link from "next/link";

interface itemsProps {
  name: string;
  slug: string;
}

const ItemSubmenu = (props: itemsProps) => {
  return (
    <div>
      <Link
        href={`/${props.slug}`}
        className="w-36 h-8 bg-white border rounded border-gray-200 font-bold text-xs font-text text-primaryColor
      hover:bg-secondaryColor hover:text-white duration-100 active:bg-primaryColor"
      >
        {props.name}
      </Link>
    </div>
  );
};

export default ItemSubmenu;
