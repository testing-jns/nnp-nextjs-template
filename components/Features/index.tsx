"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresDataEn from "./featuresDataEn";
import featuresDataId from "./featuresDataId";

import { useTranslation } from "react-i18next";

const Features = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section
        id="features"
        // className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
        className="relative z-10 py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title={t("service.title")}
            paragraph={t("service.description")}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {i18n.language === "en"
              ? featuresDataEn.map((feature) => (
                  <SingleFeature key={feature.id} feature={feature} />
                ))
              : featuresDataId.map((feature) => (
                  <SingleFeature key={feature.id} feature={feature} />
                ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
