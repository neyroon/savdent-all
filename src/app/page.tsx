import { Footer } from "@/components/footer/footer";
import { FormBlock } from "@/components/form-block/form-block";
import { Header } from "@/components/header";
import { MainBlock } from "@/components/main-block/main-block";
import { ServicesBlock } from "@/components/services-block/services-block";
import { VideoReview } from "@/components/video-review/video-review";
import { WorkersBlock } from "@/components/workers-block/workers-block";
import { YandexReview } from "@/components/yandex-review/yandex-review";
import { getStrapiURL } from "@/utils/strapi";

export default async function Home() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const mainBlockPath = "/api/main-block?populate[slide][populate]=*";
  const serviceBlockPath =
    "/api/service-block?populate[0]=tabs&populate[1]=tabs.tab&populate[2]=tabs.tab.service";
  const reviewBlockPath =
    "/api/blok-otzyvov?populate[0]=videos&populate[1]=videos.video_item&populate[2]=videos.video_item.video&populate[3]=videos.video_item.preview&populate[4]=reviews&populate[5]=reviews.review_item&populate[6]=reviews.review_item.image";
  const workersBlockPath =
    "/api/blok-rabotniki?populate[0]=workers_slider&populate[1]=workers_slider.workers_slide&populate[2]=workers_slider.workers_slide.certificates&populate[3]=workers_slider.workers_slide.certificates.certificate_item&populate[4]=workers_slider.workers_slide.certificates.certificate_item.image&populate[5]=workers_slider.workers_slide.certificates.certificate_item.cert&populate[6]=workers_slider.workers_slide.image";

  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const mainBlockrequestUrl = getStrapiURL(mainBlockPath);
  const mainBlockResponseData = await fetch(mainBlockrequestUrl, mergedOptions);
  const mainBlock = await mainBlockResponseData.json();

  const serviceBlockrequestUrl = getStrapiURL(serviceBlockPath);
  const serviceBlockResponseData = await fetch(
    serviceBlockrequestUrl,
    mergedOptions
  );
  const serviceBlock = await serviceBlockResponseData.json();

  const reviewBlockrequestUrl = getStrapiURL(reviewBlockPath);
  const reviewBlockResponseData = await fetch(
    reviewBlockrequestUrl,
    mergedOptions
  );
  const reviewBlock = await reviewBlockResponseData.json();
  console.log(reviewBlock);
  const workersBlockrequestUrl = getStrapiURL(workersBlockPath);
  const workersBlockResponseData = await fetch(
    workersBlockrequestUrl,
    mergedOptions
  );
  const workersBlock = await workersBlockResponseData.json();

  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <MainBlock data={mainBlock.data} />
        <ServicesBlock data={serviceBlock.data} />
        <WorkersBlock data={workersBlock.data} />
        <VideoReview data={reviewBlock.data} />
        <YandexReview data={reviewBlock.data} />
        <FormBlock />
      </main>
      <Footer />
    </>
  );
}
