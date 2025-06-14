import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">We're Here When You Need Us</h2>
          <p className="text-xl text-slate-300">Security doesn't wait for business hours. Neither do we.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p>📞 1-800-EDTECHIE (1-800-338-3244)</p>
                <p>📧 hello@edtechiecorp.com</p>
                <p>🕒 Mon-Fri, 9 AM - 6 PM PST</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="p-6">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
              <p className="text-slate-400 text-sm mb-2">hello@edtechie.com</p>
              <p className="text-slate-500 text-xs">Response within 2 hours</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="p-6">
              <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-slate-400 text-sm mb-2">Available 24/7</p>
              <p className="text-slate-500 text-xs">Instant support</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 text-center">
            <CardContent className="p-6">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Headquarters</h3>
              <p className="text-slate-400 text-sm mb-2">San Francisco, CA</p>
              <p className="text-slate-500 text-xs">Global remote team</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 max-w-3xl mx-auto">
            <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Emergency Security Support</h3>
            <p className="text-slate-300 mb-6">
              Experiencing a security incident? Our emergency response team is available 24/7 for existing customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <p className="text-red-400 font-semibold">Emergency Hotline</p>
                <p className="text-white text-lg">1-800-SECURITY</p>
              </div>
              <div className="text-center">
                <p className="text-red-400 font-semibold">Emergency Email</p>
                <p className="text-white text-lg">emergency@edtechiecorp.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
