import { getDictionary } from "./dictionaries"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Questions from "@/components/questions"
import WaitingList from "@/components/waiting-list"
import Services from "@/components/services"
import Location from "@/components/location"
import Footer from "@/components/footer"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: "en" | "ar" }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen">
      <Header dict={dict} lang={lang} />
      <Hero dict={dict} lang={lang} />
      <Questions dict={dict} lang={lang} />
      <WaitingList dict={dict} lang={lang} />
      <Services dict={dict} lang={lang} />
      <Location dict={dict} lang={lang} />
      <Footer dict={dict} lang={lang} />
    </main>
  )
}
