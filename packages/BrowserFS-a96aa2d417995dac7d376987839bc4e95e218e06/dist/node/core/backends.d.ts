import AsyncMirror from '../backend/AsyncMirror';
import Dropbox from '../backend/Dropbox';
import Emscripten from '../backend/Emscripten';
import FolderAdapter from '../backend/FolderAdapter';
import HTML5FS from '../backend/HTML5FS';
import InMemory from '../backend/InMemory';
import IndexedDB from '../backend/IndexedDB';
import LocalStorage from '../backend/LocalStorage';
import MountableFileSystem from '../backend/MountableFileSystem';
import OverlayFS from '../backend/OverlayFS';
import WorkerFS from '../backend/WorkerFS';
import HTTPRequest from '../backend/HTTPRequest';
import ZipFS from '../backend/ZipFS';
import IsoFS from '../backend/IsoFS';
/**
 * @hidden
 */
declare const Backends: {
    AsyncMirror: typeof AsyncMirror;
    Dropbox: typeof Dropbox;
    Emscripten: typeof Emscripten;
    FolderAdapter: typeof FolderAdapter;
    HTML5FS: typeof HTML5FS;
    InMemory: typeof InMemory;
    IndexedDB: typeof IndexedDB;
    IsoFS: typeof IsoFS;
    LocalStorage: typeof LocalStorage;
    MountableFileSystem: typeof MountableFileSystem;
    OverlayFS: typeof OverlayFS;
    WorkerFS: typeof WorkerFS;
    HTTPRequest: typeof HTTPRequest;
    XmlHttpRequest: typeof HTTPRequest;
    ZipFS: typeof ZipFS;
};
export default Backends;
