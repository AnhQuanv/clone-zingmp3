import icons from "./icon"

const { MdOutlineLibraryMusic, RiAlbumFill, SiSoundcharts, LuNewspaper } = icons;
export const sideBarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icon: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icon: <RiAlbumFill size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icon: <SiSoundcharts size={24} />
    },

    {
        path: 'follow',
        text: 'Theo dõi',
        icon: <LuNewspaper size={24} />
    }
]