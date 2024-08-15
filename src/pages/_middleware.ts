import { Logging } from '@google-cloud/logging';

const logging = new Logging();
const log = logging.log('user-activity');

export function middleware(req: NextRequest) {
    const ip = req.ip;
    const userAgent = req.headers.get('user-agent') || '';
    const referrer = req.headers.get('referer') || '';
    const url = req.nextUrl.href;

    const metadata = {
        resource: { type: 'global' },
    };

    const entry = log.entry(metadata, {
        ip,
        userAgent,
        referrer,
        url,
        timestamp: new Date().toISOString(),
    });

    log.write(entry).catch(console.error);

    return NextResponse.next();
}
