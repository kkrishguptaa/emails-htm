import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa6";
import {
  Html,
  Head,
  Preview,
  Body,
  Heading,
  Tailwind,
  Container,
  Img,
  Text,
  Button,
  Link,
} from "@react-email/components";
import * as React from "react";

export default function Promotion() {
  return (
    <Tailwind
      config={{
        darkMode: "media",
        theme: {
          extend: {
            colors: {
              brand: "#6229AE",
            },
          },
        },
      }}
    >
      <Html>
        <Head>
          <title>
            Mark your Calendars 🗓️ HackTheMountains is on the line 🔥
          </title>
        </Head>
        <Preview>
          Mark your Calendars 🗓️ HackTheMountains is on the line 🔥
        </Preview>
        <Body>
          <Container className="bg-slate-50 font-sans text-slate-900 dark:bg-slate-900 dark:text-slate-50">
            <header className="-mb-12">
              <Img
                src="https://github.com/xkrishguptaa/emails-htm/assets/135469703/8dac003d-bc00-4088-90ce-74ab676de807"
                width="100%"
                height="auto"
              />
            </header>
            <div className="mx-auto max-w-prose p-6">
              Hey there,
              <br />
              <br />
              We have your heart-felt thanks for being a part of the previous
              seasons of HackTheMountains.
              <br />
              <br />
              We wanted to inform you that Hack The Mountains is round the
              corner this year again to participate this year, we have something
              special for you! This year round, for our hackathon, we've
              prepared a in-house registration and idea submission platform!
              <br />
              <br />
              Here are the details on how to register:
              <br />
              <br />
              <ol>
                <li>
                  Go to{" "}
                  <Link href="https://portal.hackthemountain.tech">
                    portal.hackthemountain.tech
                  </Link>
                </li>
                <li>Register for your account</li>
                <li>Create a team</li>
                <li>Send your team invite code to your buddies</li>
              </ol>
              To know more, read the Comprehensive Guide to HTM Portal
              Registration, Team Creation and Collaboration:
              <div className="my-4">
                <Button
                  href="https://scribehow.com/page/A_Comprehensive_Guide_to_HTM_Portal_Registration_Team_Creation_and_Collaboration__AJKkuVeHQL-JK__SvPNusw"
                  style={{
                    background:
                      "linear-gradient(90deg, #6229AE 0%, #8154C5 100%)",
                  }}
                  className="mx-auto block w-max rounded px-4 py-2 text-lg font-bold text-slate-50"
                >
                  Read more
                </Button>
              </div>
            </div>
            <header>
              <Img
                src="https://github.com/xkrishguptaa/emails-htm/assets/135469703/8e852a3b-04d8-4925-a4e0-fd3ced922528"
                width="100%"
                height="auto"
              />
            </header>
            <div className="mx-auto max-w-prose p-6">
              We believe you'd be a great person to advocate and evangelise
              about hackthemountains since you've experienced our hackathon's
              previous season(s)!
              <div className="my-4">
                <Button
                  href="https://bit.ly/htm4cfevangelist"
                  style={{
                    background:
                      "linear-gradient(90deg, #6229AE 0%, #8154C5 100%)",
                  }}
                  className="mx-auto block w-max rounded px-4 py-2 text-lg font-bold text-slate-50"
                >
                  Apply now!
                </Button>
              </div>
              We also appreciate help other ways! — As in, if you have any
              suggestions, or encounter any issues, Please join{" "}
              <Link href="http://bit.ly/HackTheMountains">Discord</Link>, and
              feel free to open a ticket.
              <br />
              <br />
              Thank you,
              <br />
              Hack The Mountains
            </div>
            <footer
              style={{
                background: "linear-gradient(90deg, #6229AE 0%, #8154C5 100%)",
              }}
              className="px-8 py-10 text-center text-slate-50"
            >
              <div className="mx-auto inline-flex items-center gap-2">
                <Link
                  href="https://instagram.com/hackmountains"
                  className="text-brand flex items-center justify-center rounded-full bg-white p-2"
                  style={{
                    aspectRatio: 1,
                    height: 16,
                    width: 16,
                  }}
                >
                  <FiInstagram />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/hackmountains"
                  className="text-brand flex items-center justify-center rounded-full bg-white p-2"
                  style={{
                    aspectRatio: 1,
                    height: 16,
                    width: 16,
                  }}
                >
                  <FiLinkedin />
                </Link>
                <Link
                  href="https://twitter.com/hackmountains"
                  className="text-brand flex items-center justify-center rounded-full bg-white p-2"
                  style={{
                    aspectRatio: 1,
                    height: 16,
                    width: 16,
                  }}
                >
                  <FiTwitter />
                </Link>
                <Link
                  href="https://bit.ly/HackTheMountains"
                  className="text-brand flex items-center justify-center rounded-full bg-white p-2"
                  style={{
                    aspectRatio: 1,
                    height: 16,
                    width: 16,
                  }}
                >
                  <FaDiscord />
                </Link>
              </div>
              <Heading as="h3" className="uppercase">
                Join our Community
              </Heading>
              <Text>
                For any queries, drop a mail at{" "}
                <Link
                  href="mailto:hackthemountains@gmail.com"
                  className="text-slate-100 underline"
                >
                  hackthemountains@gmail.com
                </Link>
              </Text>
            </footer>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
