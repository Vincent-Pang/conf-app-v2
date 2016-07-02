import { Pipe, PipeTransform } from '@angular/core';
import { Talk } from './talk.model';

import * as _ from 'lodash';

@Pipe({
  name: 'speakerFilter'
})
export class SpeakerFilterPipe implements PipeTransform {

  transform(talks: Talk[], speaker: string): Talk[] {
    if (speaker === '') {
      return talks;
    } else {
      return talks.filter(talk => _.startsWith(talk.speaker.toLowerCase(), speaker.toLowerCase()));
    }
  }

}
