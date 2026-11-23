"""Local static preview with SPA route fallback."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import socket
from pathlib import Path

ROOT = Path(__file__).resolve().parent

class Handler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        requested = path.split('?', 1)[0].split('#', 1)[0]
        target = (ROOT / requested.lstrip('/')).resolve()
        if not target.is_relative_to(ROOT):
            return str(ROOT / 'index.html')
        if target.is_file():
            return str(target)
        if target.is_dir() and (target / 'index.html').is_file():
            return str(target / 'index.html')
        if '.' not in Path(requested).name:
            return str(ROOT / 'index.html')
        return str(target)

if __name__ == '__main__':
    class IPv6Server(ThreadingHTTPServer):
        address_family = socket.AF_INET6
    IPv6Server(('::', 4173), Handler).serve_forever()
