import { FaTwitter, FaSquareInstagram, FaFacebook, FaYoutube } from 'react-icons/fa6';

const SocialIcons = () => {
  return (
    <ul className="flex text-lightGrey pr-[30px] gap-[15px]">
      <li>
        <a href="#">
          <FaTwitter className="text-xl hover:text-darkGrey" />
        </a>
      </li>
      <li>
        <a href="#">
          <FaSquareInstagram className="text-xl hover:text-darkGrey" />
        </a>
      </li>
      <li>
        <a href="#">
          <FaFacebook className="text-xl hover:text-darkGrey" />
        </a>
      </li>
      <li>
        <a href="#">
          <FaYoutube className="text-xl hover:text-darkGrey" />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
