import swagPhotos from "../../photos";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../navigation";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home() {
  unstable_setRequestLocale("en");
  const t = useTranslations("Index");
  const photos = swagPhotos;

  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">{t("title")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {photos.map(({ id, imageSrc }) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image
              alt=""
              src={imageSrc}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
