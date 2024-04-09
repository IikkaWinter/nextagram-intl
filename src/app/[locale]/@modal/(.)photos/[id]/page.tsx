import { unstable_setRequestLocale } from "next-intl/server";
import Frame from "../../../../../components/frame/Frame";
import Modal from "../../../../../components/modal/Modal";
import swagPhotos, { Photo } from "../../../../../photos";

export default function PhotoModal({
  params,
}: {
  params: { id: string; locale: string };
}) {
  const { id: photoId, locale } = params;
  unstable_setRequestLocale(locale);
  const photos = swagPhotos;
  const photo: Photo = photos.find((p) => p.id === photoId)!;
  console.log("Locale missing in @modal/(.)photos/[id]", params);
  return (
    <Modal>
      <Frame photo={photo} />
    </Modal>
  );
}
