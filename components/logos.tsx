// import Link from "next/link";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { containerVariants, itemVariants } from "@/lib/animation-variants";
// import TextBlur from "./ui/text-blur";

// const logos = [
//   { href: "https://nextjs.org", src: "/nextjs.svg", alt: "Next.js Logo" },
//   { href: "https://notion.so", src: "/notion.svg", alt: "Notion Logo" },
//   { href: "https://resend.com", src: "/resend.svg", alt: "Resend Logo" },
//   { href: "https://upstash.com", src: "/upstash.svg", alt: "Upstash Logo" },
//   { href: "https://ui.shadcn.com", src: "/shadcn.svg", alt: "shadcn Logo" },
//   { href: "https://vercel.com", src: "/vercel.svg", alt: "Vercel Logo" },
// ];

// export default function Logos() {
//   return (
//     <motion.div
//       className="flex h-full w-full flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-16"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible">
//       <motion.div variants={itemVariants}>
//         <TextBlur
//           className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
//           text="Powered by"
//         />
//       </motion.div>

//       <motion.div variants={itemVariants}>
//         <TextBlur
//           className="text-center text-base text-zinc-300 sm:text-lg"
//           text="Simple and powerful tools that help you build faster"
//           duration={0.8}
//         />
//       </motion.div>

//       <motion.div
//         variants={itemVariants}
//         className="mt-4 grid w-full grid-cols-2 items-center justify-center gap-4 md:mt-6 md:grid-cols-3 md:gap-6">
//         {logos.map((logo, index) => (
//           <Link
//             key={index}
//             href={logo.href}
//             rel="noopener noreferrer"
//             target="_blank"
//             className="flex h-24 items-center justify-center rounded-lg border bg-zinc-900 p-8 transition-all duration-150 ease-in-out md:hover:border-zinc-700 md:hover:bg-accent">
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={100}
//               height={100}
//               className="h-auto w-32 opacity-85"
//             />
//           </Link>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// }


import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import TextBlur from "./ui/text-blur";
import Link from "next/link";

const tech = [
  {
    href: "https://firebase.google.com",
    src: "/firebase.png",
    alt: "Firebase Logo",
    text: "Backend, authentication, and real-time database to accelerate your development.",
    title: "Firebase"
  },
  {
    href: "https://onesignal.com",
    src: "/onesignal.png",
    alt: "OneSignal Logo",
    text: "Push notifications made easy to keep your users engaged.",
    title: "OneSignal"
  },
  {
    href: "https://revenuecat.com",
    src: "/revenuecat.png",
    alt: "RevenueCat Logo",
    text: "Simplify in-app purchases and subscription management.",
    title: "RevenueCat"
  }
]

export default function Logos() {
  return (
    <motion.div
      className="flex h-full w-[100%] sm:w-[90%] 2xl:w-[60%]  flex-col gap-2 pb-12 pt-12 md:pb-24 md:pt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-2xl font-medium tracking-tight text-zinc-200 md:text-3xl"
          text="Powered by"
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-base text-zinc-300 sm:text-lg"
          text="Simple and powerful tools that help you build faster"
          duration={0.8}
        />
      </motion.div>
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 lg:gap-8 lg:px-6 mt-6">
        {/* Firebase */}
        {tech.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            rel="noopener noreferrer"
            target="_blank">
            <motion.div
              variants={itemVariants}
              className="text-center flex-col w-full mx-auto justify-center items-center
          rounded-lg border bg-zinc-900 p-8 transition-all duration-150 ease-in-out md:hover:border-zinc-700 md:hover:bg-accent
          ">
              <Image
                src={item.src}
                width={48}
                height={48}
                alt={item.alt}
                className="h-12 mx-auto mb-4 rounded-full"
              />
              <TextBlur
                className="text-center text-xl font-bold"
                text={item.title}
              />
              <TextBlur
                className="text-center text-sm"
                text={item.text}
              />
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}