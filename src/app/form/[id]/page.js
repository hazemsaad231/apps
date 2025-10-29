
"use client"

import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import axios from "axios"
import toast from "react-hot-toast"
import { useParams } from "next/navigation"

export default function Form() {
  const params = useParams()
  const id = params?.id

  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      invest_id: "",
      number_of_arrows: 1,
    },
  })

  useEffect(() => {
    if (id) {
      setValue("invest_id", id)
    }
  }, [id, setValue])

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      console.log("sending:", JSON.stringify(data, null, 2))

      const res = await axios.post(
        "https://tadbeer.wj.edu.sa/public/api/investors",
        data
      )

      reset({ invest_id: id ?? "", number_of_arrows: 1 , name: "", notes: "", phone: ""})
      toast.success("تم الارسال بنجاح")
    } catch (err) {
      console.error("submit error", err)
      // لو الـ API بيرجع رسالة خطأ مفصّلة ممكن تعرضها كـ toast
      toast.error("لم يتم الارسال بنجاح")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-full flex items-center justify-center py-20 p-4 bg-gray-100">
      <Card className="w-full md:w-1/2 shadow-lg">
        <CardHeader>
          <CardTitle>نموذج استثمار</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* hidden invest_id */}
            <input id="invest_id" type="hidden" {...register("invest_id")} />

            <div>
              <label htmlFor="name" className="block mb-1">الاسم الكامل</label>
              <Input
                id="name"
                placeholder="اكتب اسمك الكامل"
                {...register("name", { required: "الاسم مطلوب" })}
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1">رقم الهاتف</label>
              <Input
                id="phone"
                placeholder="اكتب رقم هاتفك"
                {...register("phone", { required: "رقم الهاتف مطلوب" })}
              />
              {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="number_of_arrows" className="block mb-1">عدد الأسهم المراد استثمارها</label>
              <Input
                id="number_of_arrows"
                type="number"
                min="1"
                step="1"
                {...register("number_of_arrows", {
                  required: "الكمية مطلوبة",
                  min: { value: 1, message: "لا يمكن أن تكون أقل من 1" },
                  valueAsNumber: true,
                })}
              />
              {errors.number_of_arrows && <p className="text-sm text-red-600 mt-1">{errors.number_of_arrows.message}</p>}
            </div>

            <div>
              <label htmlFor="notes" className="block mb-1">ملاحظات</label>
              <textarea
                id="notes"
                placeholder="ملاحظات"
                {...register("notes", { required: "برجاء إضافة ملاحظة" })}
                className="w-full p-2 rounded border h-20"
              />
              {errors.notes && <p className="text-sm text-red-600 mt-1">{errors.notes.message}</p>}
            </div>

            <div className="flex justify-between mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => reset({ invest_id: id ?? "", number_of_arrows: 1 })}
                disabled={loading}
              >
                إعادة تعيين
              </Button>

              <Button
                type="submit"
                className="cursor-pointer bg-[#DFC96D] hover:bg-[#c9b25a]"
                disabled={loading}
              >
                {loading ? "جاري الإرسال..." : "إرسال"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
