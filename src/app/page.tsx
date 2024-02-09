import styles from "./page.module.css";
import {
  Box,
  Button,
  Card,
  Container,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";

const TECH_STACKS_IMAGE_SIZE = 16;

export default function Home() {
  const TechStackView = ({
    src,
    title,
    href,
  }: {
    src: string;
    title: string;
    href: string;
  }) => {
    return (
      <Box>
        <Link href={href}>
          <Image boxSize={TECH_STACKS_IMAGE_SIZE} src={src} alt={title} />
        </Link>
        <Text marginTop={1.5} fontSize={"smaller"}>
          {title}
        </Text>
      </Box>
    );
  };

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8} padding={16}>
      <Box flexDirection={"column"} display={"flex"}>
        <Box>
          <Text fontSize={"5xl"}>{"Deepak Kumar"}</Text>
          <Text fontSize={"lg"}>
            {"Mobile App Developer (Android, React-Native)"}
          </Text>
          <Text fontSize={"sm"}>
            {"Lead Mobile Engineer at Thoughts2Binary"}
          </Text>
          <Box margin={8} />
          <Text fontSize={"3xl"}>{"Tech Stacks"}</Text>
          <Box marginBottom={4} />
          <SimpleGrid minChildWidth={TECH_STACKS_IMAGE_SIZE} spacing="4px">
            <TechStackView
              src="android.svg"
              title={"Android"}
              href="https://developer.android.com/"
            />
            <TechStackView
              src="kotlin.svg"
              title={"Kotlin"}
              href="https://kotlinlang.org/"
            />
            <TechStackView src="javascript.svg" title={"JavaScript"} href="" />
            <TechStackView src="typescript.svg" title={"TavaScript"} href="" />
            <TechStackView
              src="react-native.svg"
              title={"React-Native"}
              href=""
            />
            <TechStackView src="realm.svg" title={"Realm"} href="" />
          </SimpleGrid>
        </Box>
        <HStack marginTop={100}>
          <Link href={"https://github.com/deepakkumardk/"} isExternal>
            <Image
              boxSize="24px"
              src="https://github.com/fluidicon.png"
              alt="GitHub"
            />
          </Link>
        </HStack>
      </Box>
      <Box>
        <Text color={"#94A3B8"}>
          <Text fontSize={"xl"} as={"b"} color={"white"}>
            Welcome to my Portfolio!
          </Text>
          <br />
          <br />
          With over{" "}
          <Text as={"b"} color={"white"}>
            5+ years
          </Text>{" "}
          of dedicated experience in the dynamic realm of mobile app
          development, I have honed my skills and expertise in crafting
          cutting-edge solutions using Android and React Native. Throughout my
          journey, I have navigated diverse technological stacks, seamlessly
          delivering high-quality apps, products, and consumer-centric
          solutions.
          <br />
          <br />
          One of my key strengths lies in the meticulous{" "}
          <Text as={"b"} color={"white"}>
            architecture and structuring of projects
          </Text>
          , ensuring that the codebase aligns seamlessly with project
          requirements while maintaining a{" "}
          <Text as={"b"} color={"white"}>
            strong foundation
          </Text>{" "}
          for future extensibility. I take pride in my ability to envision and
          implement robust structures that not only meet immediate needs but
          also pave the way for
          <Text as={"b"} color={"white"}>
            {" "}
            scalable and adaptable applications.
          </Text>
          <br />
          <br />
          In my role as a
          <Text as={"b"} color={"white"}>
            {" "}
            Lead Mobile Engineer
          </Text>
          , I had the privilege of leading a talented team of 10 mobile
          developers across various projects. Through effective collaboration
          and leadership, I facilitated the successful execution of multiple
          initiatives, overseeing the entire mobile development lifecycle. This
          experience has provided me with valuable insights into team
          management, fostering a collaborative environment that encourages
          innovation and excellence.
        </Text>
        <Box marginTop={8} marginBottom={8} />
      </Box>
    </SimpleGrid>
  );
}
