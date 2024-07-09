import React from "react";

import Poster from "@components/Poster";
import ProgramStage from "@components/Program/Stage";
import ProgramLesson from "@components/Program/Lesson";
import ProgramBlock from "@components/Program/Block";

export default function Index() {
  return (
    <div className='flex flex-col gap-4'>
      <Poster />

      <ProgramStage>
        <ProgramLesson />
      </ProgramStage>

      <ProgramStage>
        <ProgramBlock>
          <ProgramLesson
            rounded={ false }
          />
        </ProgramBlock>
      </ProgramStage>

      <ProgramStage>
        <ProgramBlock>
          <ProgramLesson
            rounded={ false }
          />
        </ProgramBlock>
      </ProgramStage>

      <ProgramStage>
        <ProgramBlock>
          <ProgramLesson
            rounded={ false }
          />
        </ProgramBlock>
      </ProgramStage>
    </div>
  )
}
