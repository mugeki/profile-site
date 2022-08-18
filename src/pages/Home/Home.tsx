import { Button, Dialog, Textarea, TextInput } from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";
import TechStacks from "../../components/TechStacks";
import data from "./mockData.json";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<String>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_USER_ID,
        template_params: {
          reply_to: form.email,
          from_name: form.name,
          message: form.message,
        },
      })
    );
    setIsSubmitting(true);
    await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        user_id: import.meta.env.VITE_EMAILJS_USER_ID,
        template_params: {
          reply_to: form.email,
          from_name: form.name,
          message: form.message,
        },
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          setDialogMessage("Message sent!");
        } else {
          setDialogMessage("Something went wrong...");
        }
      })
      .finally(() => {
        setIsSubmitting(false);
        setOpenDialog(true);
        setTimeout(() => setOpenDialog(false), 3000);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <Dialog
        role="alertdialog"
        opened={openDialog}
        withCloseButton
        onClose={() => setOpenDialog(false)}
        size="md"
        radius="md"
      >
        <p>{dialogMessage}</p>
      </Dialog>
      <main className="flex flex-col items-center text-lg md:text-xl">
        <section id="about" className="flex min-h-screen w-8/12 md:w-9/12">
          <div className="m-auto">
            <div className="my-5">
              <motion.p
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                className="text-3xl md:text-4xl text-zinc-600 dark:text-zinc-300"
              >
                Hello! I'm
              </motion.p>
              <motion.p
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                className="my-2 text-5xl md:text-6xl font-bold"
              >
                Muhamad Elang Ramadhan
              </motion.p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="bg-violet-500 rounded-full mb-3 "
                style={{ height: "3px" }}
              ></motion.div>
              <motion.p
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                className="m-0 w-full text-zinc-600 dark:text-zinc-300"
                style={{ maxWidth: "500px" }}
              >
                A passionate computer science student who loves to code and
                software engineering.
              </motion.p>
            </div>
            <div className="my-7">
              <h5 className="mb-3 font-bold">Technologies I’ve Used</h5>
              <TechStacks />
            </div>
          </div>
        </section>
        <section id="projects" className="flex min-h-screen w-8/12 md:w-9/12">
          <div className="m-auto pt-16">
            <h4 className="w-fit font-bold mb-3 text-4xl p-3 relative z-[1] before:text-violet-500 before:content-['⌜'] before:absolute before:top-0 before:left-0 after:text-violet-500 after:content-['⌟'] after:absolute after:bottom-0 after:right-0">
              Projects I've Worked On
            </h4>
            <div className="flex flex-wrap gap-16 lg:flex-col py-4">
              {data.projects.map((entry) => (
                <ProjectCard key={entry.id} entry={entry} />
              ))}
            </div>
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          id="contact"
          className="flex min-h-screen w-8/12 md:w-9/12"
        >
          <div className="m-auto">
            <h4 className="w-fit font-bold mb-3 text-4xl p-3 relative before:text-violet-500 before:content-['⌜'] before:absolute before:top-0 before:left-0 after:text-violet-500 after:content-['⌟'] after:absolute after:bottom-0 after:right-0">
              Get in Touch
            </h4>
            <p className="mb-10 w-full text-zinc-600 dark:text-zinc-300">
              If you have any questions, projects, or simply want to say "Hi",
              feel free to contact me!
            </p>
            <div className="rounded-3">
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <TextInput
                    variant="default"
                    placeholder="Your email, ex: johndoe@gmail.com"
                    label="Email"
                    size="md"
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <TextInput
                    variant="default"
                    placeholder="Your name"
                    label="Name"
                    size="md"
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Textarea
                    variant="default"
                    placeholder="Write your message"
                    label="Message"
                    size="md"
                    autosize
                    minRows={3}
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Button
                    loading={isSubmitting}
                    disabled={!form.message || !form.name || !form.email}
                    type="submit"
                    className="z-0"
                  >
                    Send!
                  </Button>
                </motion.div>
              </form>
            </div>
          </div>
        </motion.section>
      </main>
    </Layout>
  );
}
