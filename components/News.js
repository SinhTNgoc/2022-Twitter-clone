import Image from "next/image";

const News = ({ article }) => {
  return (
    <div>
      <a className="" href={article.url} target="_blank" rel="noreferrer">
        <div className="flex items-center justify-between hover:bg-gray-200 transition duration-200">
          <div className="space-y-0.5">
            <h6 className="text-sm font-bold">{article.title}</h6>
            <p className="text-xs font-medium text-gray-500">{article.source.name}</p>
          </div>

          <img
            src={article.urlToImage}
            alt={article.name}
            className="w-[70px] h-[70px] rounded-xl "
          />
        </div>
      </a>
    </div>
  );
};

export default News;
