interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <div className="p-2">
      <div className="flex flex-col gap-4">
        <ul className="flex flex-row gap-1">
          {tags.map((tag) => (
            <li
              key={tag}
              className="px-2 h-3.5 flex text-[9px] text-gray-50 border rounded-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
