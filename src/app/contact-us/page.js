import Phone from '@/components/icons/Phone'
import Email from '@/components/icons/Email'
import PinAddress from '@/components/icons/PinAddress'

export default function ContactView(){
    return (
        <section class="max-w-sm mx-auto py-10" id="contact">
        <div class="container">
            <div class="heading text-center">
                <h2 className="text-4xl font-bold">Contact
                    <span className="text-primary"> Us </span></h2>
                <p className="text-md font-thin leading-4 pt-2">{`Let’s talk pizza! Find quick link resources about View's Pizza, share your experience, or send us a question.`}</p>
            </div>
            <div class="pt-8">
                <h3 className="text-xl font-medium text-center">Contact detail</h3>
                <div class="grid grid-cols-2 gap-y-3 mt-3">
                    <h4 class="flex gap-2 justify-center">
                        <Phone/>
                        PHONE
                    </h4>
                    <div>
                        +660000000000
                    </div>
                    <h4 class="flex gap-2 justify-center">
                        <Email/>
                        EMAIL
                    </h4>
                    <span>example@info.com</span>
                    <h4 class="flex gap-2 justify-center">
                        <PinAddress/>
                        ADDRESS
                    </h4>
                    <span>6743 last street , Abcd, Xyz</span>
                </div>
            </div>
        </div>
    </section>
    )
}