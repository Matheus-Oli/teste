import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  image: string
}

export default function TeamMember({ name, role, bio, image }: TeamMemberProps) {
  return (
    <div className="team-member text-center">
      <div className="team-member-image relative mx-auto rounded-full overflow-hidden h-40 w-40 mb-4">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="team-member-name text-xl font-semibold">{name}</h3>
      <p className="team-member-role text-sm mb-3">{role}</p>
      <p className="team-member-bio">{bio}</p>
    </div>
  )
}
