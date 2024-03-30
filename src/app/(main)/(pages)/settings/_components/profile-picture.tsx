'use client'

import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import UploadCareButton from './uploadcare-button'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-lg text-white">Profile Picture</p>
      <div className="flex flex-col gap-2">
        {userImage ? (
          <>
            <div className="h-full w-full">
              <Image
                src={userImage}
                alt="User_Image"
                width={200}
                height={200}
                className="rounded-full w-24 h-24 object-cover"
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="bg-transparent w-fit px-2 text-white/70 hover:bg-transparent hover:text-white"
            >
              <X /> Remove
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  )
}

export default ProfilePicture
