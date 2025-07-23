"use client";

import React from "react";

import SectionTitle from "@/components/common/section-title";


export default function PrivacyPolicyPage() {
  return (
    <div className="flex w-full justify-center px-4 pb-20 pt-24 text-base text-gray-700">
      <div className="w-full max-w-4xl rounded-2xl bg-white p-8 shadow-md">
        <SectionTitle childern="Privacy & Cookies Policy" />

        <div className="space-y-6 mt-6 leading-relaxed">
          <p>
            To understand how we collect, use, and store your personal data.
          </p>

          <h2 className="text-xl font-semibold text-black">Who we are</h2>
          <p>
            Portsmouth Tech and Cultural Hub is a registered community interest
            company in England and Wales (16408734). Our website address is:{" "}
            <a
              href="https://www.patecs.co.uk/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.patecs.co.uk/
            </a>
          </p>

          <h2 className="text-xl font-semibold text-black">How to contact us</h2>
          <p>
            <strong>Full name of legal entity:</strong> PATECS TECHNOLOGIES
            (PORTSMOUTH TECH AND CULTURAL HUB) CIC
          </p>
          <p>
            <strong>Email address:</strong>{" "}
            <a
              href="mailto:Support@patecs.co.uk"
              className="text-blue-600 underline"
            >
              Support@patecs.co.uk
            </a>
          </p>

          <h2 className="text-xl font-semibold text-black">Our commitment to you</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>We will only collect information that is relevant</li>
            <li>
              We will use your personal information fairly and only for the
              purposes for which it was given
            </li>
            <li>We will make sure your information is updated when needed</li>
            <li>We will not hold your information longer than necessary</li>
            <li>
              We will make it easy for you to exercise your rights under the law
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-black">
            How we collect your personal data
          </h2>
          <p>
            We collect information when you make a donation, join a campaign,
            respond to appeals, volunteer, purchase services, or complete any
            online form on our site.
          </p>

          <h2 className="text-xl font-semibold text-black">
            How do we use your information?
          </h2>
          <p>We may use your information to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Provide you with information, products, or services you've requested
            </li>
            <li>Inform you about our work or activities</li>
            <li>
              Invite you to participate in website features or events you've
              registered for
            </li>
            <li>Process donations or fundraising activities</li>
            <li>Manage internal records and respond to feedback or complaints</li>
            <li>
              Contact you as a representative of an organisation or supporter
            </li>
            <li>
              Analyse interests and preferences to provide more relevant
              communication
            </li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            This helps us understand which activities are most meaningful to our
            supporters.
          </p>

          <h2 className="text-xl font-semibold text-black">Comments</h2>
          <p>
            When visitors leave comments, we collect the data in the form, their
            IP address, and browser user agent string to help detect spam.
          </p>

          <h2 className="text-xl font-semibold text-black">Media</h2>
          <p>
            Visitors who upload images should avoid including embedded location
            data (EXIF GPS), as others can download and extract location data from
            those images.
          </p>

          <h2 className="text-xl font-semibold text-black">Cookies</h2>
          <h3 className="text-lg font-semibold text-gray-800">What are cookies?</h3>
          <p>
            Cookies are text files containing small amounts of information which are
            downloaded to your device when you visit a website. Cookies are then sent
            back to the originating website on each subsequent visit, or to another
            website that recognises that cookie. Cookies are useful because they
            allow a website to recognise a user’s device and to target the content
            displayed to the user’s interests.
          </p>
          <p>
            You can find more information about cookies at:{" "}
            <a
              href="https://www.allaboutcookies.org"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.allaboutcookies.org
            </a>
          </p>

          <h3 className="text-lg font-semibold text-gray-800">
            What information do we collect using cookies?
          </h3>
          <p>
            We use cookies to track how visitors come to our site. If you leave a
            comment on our site you may opt-in to saving your name, email address and
            website in cookies. These are for your convenience so that you do not
            have to fill in your details again when you leave another comment. These
            cookies will last for one year.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">Financial Information:</h3>
          <p>
            Donations made by card through our website are securely managed by GiveWP.{" "}
            <a
              href="https://givewp.com/privacy-policy/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View their Privacy Policy
            </a>
            .
          </p>
          <p>
            Donations made through Just Giving are subject to their data processing rules.{" "}
            <a
              href="https://www.justgiving.com/info/privacy-policy-versions/privacy-policy-v20"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View JustGiving Privacy Policy
            </a>
            .
          </p>
          <p>
            Donations made by card through Stripe are managed by them securely.{" "}
            <a
              href="https://stripe.com/gb/privacy"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Stripe’s Privacy Policy
            </a>
            .
          </p>

          <h3 className="text-lg font-semibold text-gray-800">
            Embedded content from other websites
          </h3>
          <p>
            Articles on this site may include embedded content (e.g. videos, images,
            articles, etc.). Embedded content from other websites behaves in the exact
            same way as if the visitor has visited the other website.
          </p>
          <p>
            These websites may collect data about you, use cookies, embed additional
            third-party tracking, and monitor your interaction with that embedded
            content, including tracing your interaction with the embedded content if
            you have an account and are logged in to that website.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">
            Website statistics analytics
          </h3>
          <p>
            Our website currently uses Google Analytics. Google will use this
            information for the purpose of evaluating your use of the website,
            compiling reports on website activity for website operators and providing
            other services relating to website activity and internet usage.
          </p>
          <p>
            We never disclose your personal information for direct marketing purposes;
            however, we may need to disclose your information if we are required to do
            so by law.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">How long we retain your data</h3>
          <p>
            If you leave a comment, the comment and its metadata are retained
            indefinitely. This is so we can recognize and approve any follow-up
            comments automatically instead of holding them in a moderation queue.
          </p>
          <p>
            For users that register on our website (if any), we also store the
            personal information they provide in their user profile. All users can
            see, edit, or delete their personal information at any time (except they
            cannot change their username). Website administrators can also see and
            edit that information.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">
            What rights you have over your data
          </h3>
          <p>
            If you have an account on this site, or have left comments, you can request
            to receive an exported file of the personal data we hold about you,
            including any data you have provided to us. You can also request that we
            erase any personal data we hold about you. This does not include any data
            we are obliged to keep for administrative, legal, or security purposes.
          </p>

          <h3 className="text-lg font-semibold text-gray-800">How to disable cookies</h3>
          <p>
            Find out more detailed information on disabling cookies by visiting{" "}
            <a
              href="https://www.allaboutcookies.org/manage-cookies"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              allaboutcookies.org/manage-cookies
            </a>
            .
          </p>

          <h3 className="text-lg font-semibold text-gray-800">
            Notification of change of Privacy and Cookie Policy
          </h3>
          <p>
            From time to time, Patecs Technologies (Portsmouth Tech and Cultural Hub
            CIC) may need to make changes to this Privacy & Cookie Policy.
          </p>

           <h3 className="text-lg font-semibold text-gray-800">
            Our Policies
          </h3>
          <p>
            Policies such as data protection, equality, diversity and inclusion, health and safety, safeguarding children policy, safeguarding adult policy, whistleblowing policy, comments complaints and feedback policy will be on one page, see Urbond website policies.

          </p>
        </div>
      </div>
    </div>
  );
}
