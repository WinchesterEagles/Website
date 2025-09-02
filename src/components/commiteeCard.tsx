/* this is the commitee member "figurine" card,
mapping in teams page, generates as many figurines as there are teams
 */

export interface commiteeMember {
  imageUrl: string;
  imageAlt: string;
  name: string;
  role: string;
}

/* to play around with primary and secondary colour 
I wanted the p border to alternate
the border colour is passed by the mapping in the page, the color is determined by doing the modulo of index*/
export function CommiteeCard({
  commiteeMember,
  borderColour,
}: {
  commiteeMember: commiteeMember;
  borderColour: string;
}) {
  return (
    <div className="flex flex-col w-full xl:max-w-[32%] my-2 ">
      <img
        src={commiteeMember.imageUrl}
        alt={commiteeMember.imageAlt}
        className="mb-2 rounded-t-lg w-11/12 xl:w-5/6 h-auto mx-auto"
      />

      <p
        className={`w-1/2 p-2 border-b-2 mx-auto xl:w-1/3 text-center ${borderColour}`}
      >
        {commiteeMember.name}
      </p>

      <p className="w-fit mx-auto my-1 p-2 ">{commiteeMember.role}</p>
    </div>
  );
}
