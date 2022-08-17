import { Icon } from "@iconify/react";
import { Timeline } from "@mantine/core";
import { motion } from "framer-motion";
import profile_img from "../../assets/images/Foto Formal-CIRCLE-COMPRESSED.png";
import Layout from "../../components/Layout";
import data from "./mockData.json";

export default function Resume() {
  const renderDescription = (desc: string) => {
    const splitted = desc.split("\n");
    if (splitted.length > 1) {
      return splitted.map((line: string, i: number) => <p key={i}>{line}</p>);
    }
    return desc;
  };

  return (
    <Layout>
      <main className="flex flex-col lg:flex-row gap-14 justify-center items-center lg:items-start py-10">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col h-fit w-[340px] bg-zinc-50 dark:bg-zinc-900 items-center p-10 border dark:border-zinc-700 rounded-md"
        >
          <div className="flex flex-col items-center border-b-2 dark:border-zinc-700 pb-4">
            <img
              src={profile_img}
              alt="profile"
              width={200}
              height={200}
              className="rounded-full"
            />
            <p className="font-medium text-xl mt-5">Muhamad Elang Ramadhan</p>
            <p>Cianjur, West Java, Indonesia</p>
          </div>

          <div className="flex flex-col gap-5 mt-5 items-start">
            <div className="flex gap-5">
              <Icon
                icon="akar-icons:linkedin-box-fill"
                color="#94a3b8"
                width={20}
              />
              <div className="flex flex-col">
                <h5 className="font-medium">LinkedIn</h5>
                <a
                  href="https://linkedin.com/in/muhamad-elang-ramadhan-7093721ab"
                  target="_blank"
                  className="text-blue-500 hover:underline break-all"
                >
                  linkedin.com/in/muhamad-elang-ramadhan-7093721ab
                </a>
              </div>
            </div>

            <div className="flex gap-5">
              <Icon icon="bxs:phone" color="#94a3b8" width={20} />
              <div className="flex flex-col">
                <h5 className="font-medium">Phone</h5>
                <p>+6282216160462 (Mobile)</p>
              </div>
            </div>

            <div className="flex gap-5">
              <Icon icon="eva:email-fill" color="#94a3b8" width={20} />
              <div className="flex flex-col">
                <h5 className="font-medium">Email</h5>
                <a
                  href="mailto:elangmugeki@gmail.com"
                  target="_blank"
                  className="text-blue-500 hover:underline break-all"
                >
                  elangmugeki@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          exit={{ x: -50 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-10 w-1/2"
        >
          <div className="flex flex-col">
            <h1 className="text-2xl mb-5 font-medium">Experiences</h1>
            <Timeline bulletSize={24} lineWidth={2}>
              {data.experiences.map((item, i) => (
                <Timeline.Item
                  key={i}
                  title={item.name}
                  active={!item.date_end}
                >
                  <p className="text-sm">{item.company}</p>
                  <p className="text-zinc-500 text-sm">{item.location}</p>
                  <p className="text-zinc-500 text-sm">
                    {item.date_start} - {item.date_end || "Now"}
                  </p>
                  <div className="text-sm mt-2">
                    {renderDescription(item.description)}
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>

          <div className="flex flex-col">
            <h1 className="text-2xl mb-5 font-medium">Education</h1>
            <Timeline bulletSize={24} lineWidth={2}>
              {data.educations.map((item, i) => (
                <Timeline.Item
                  key={i}
                  title={item.school}
                  active={!item.date_end}
                >
                  <p className="text-sm">{item.degree}</p>
                  <p className="text-zinc-500 text-sm">
                    {item.date_start} - {item.date_end || "Now"}
                  </p>
                </Timeline.Item>
              ))}
            </Timeline>
          </div>
        </motion.div>
      </main>
    </Layout>
  );
}
