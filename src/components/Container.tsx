import Head from "next/head";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Preloader from "@/components/Preloader";

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

export default function Container(props: ContainerProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Aymen S",
    description: "Full-stack website developer and TypeScript enthusiast.",
    image: "/assets/logo.webp",
    type: "website",
    ...customMeta,
  };

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Welcome to my space</title>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#7B82FE" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.Aymen Sj.codes${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.Aymen Sj.codes${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Aymen SJ" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Aymen SJ" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>

      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <main className={cn("container", props.className)}>{children}</main>
      <Footer />
    </>
  );
}
