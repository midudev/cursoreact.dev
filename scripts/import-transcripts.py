"""Normalize yt-dlp JSON3 subtitles and video metadata into inspectable sources.
Usage: python3 scripts/import-transcripts.py /tmp/react-transcripts
Download first with yt-dlp --skip-download --write-auto-subs --sub-langs es --sub-format json3 --write-info-json.
"""
import sys, json, re
from pathlib import Path
from datetime import date
source = Path(sys.argv[1])
text = Path('src/consts.ts').read_text()
entries = re.findall(r'"id": "([^"]+)".*?"slug": "([^"]+)"', text, re.S)
for video_id, slug in entries:
    raw = json.loads((source / f'{video_id}.es.json3').read_text())
    info = json.loads((source / f'{video_id}.info.json').read_text())
    chunks = []
    for event in raw.get('events', []):
        phrase = ''.join(s.get('utf8', '') for s in event.get('segs', [])).strip()
        phrase = re.sub(r'\s+', ' ', phrase)
        if not phrase or phrase == '\n': continue
        second = int(event.get('tStartMs', 0) / 1000)
        if chunks and second - chunks[-1]['start'] < 35:
            chunks[-1]['text'] += ' ' + phrase
        else:
            chunks.append({'start': second, 'text': phrase})
    data = dict(videoId=video_id, title=info['title'], source=f'https://www.youtube.com/watch?v={video_id}', language='es', kind='automatic-captions', retrievedAt=str(date.today()), duration=info.get('duration'), chapters=[dict(start=int(c['start_time']),title=c['title']) for c in (info.get('chapters') or [])], segments=chunks)
    Path(f'src/data/transcripts/{slug}.json').write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':'))+'\n')
    Path(f'public/transcripciones/{slug}.txt').write_text(info['title']+'\n'+data['source']+'\nTranscripción automática de YouTube. Puede contener errores.\n\n'+'\n\n'.join(f"[{c['start']//60:02}:{c['start']%60:02}] {c['text']}" for c in chunks)+'\n')
    print(slug, len(chunks), 'fragmentos,', sum(len(c['text'].split()) for c in chunks), 'palabras')
