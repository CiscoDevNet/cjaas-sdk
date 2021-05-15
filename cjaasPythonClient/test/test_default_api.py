# coding: utf-8

"""
    Customer Journey as a Service (CJaaS)

    Something amazing, something special - the Customer Journey as a Service (CJaaS) is a core data layer to enable Journeys across products built upon serverless multi-cloud architecture, to be available as a SaaS service for applications inside and outside of Cisco. [**Cisco Experimental - Not For Production Use**]  # noqa: E501

    OpenAPI spec version: 0.5.0
    Contact: cjaas-earlyaccess@cisco.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

from __future__ import absolute_import

import unittest

import swagger_client
from swagger_client.api.default_api import DefaultApi  # noqa: E501
from swagger_client.rest import ApiException


class TestDefaultApi(unittest.TestCase):
    """DefaultApi unit test stubs"""

    def setUp(self):
        self.api = DefaultApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_clear_tape(self):
        """Test case for clear_tape

        Delete All Events Collected within Namespace(i.e Org)  # noqa: E501
        """
        pass

    def test_clear_tape_by_person(self):
        """Test case for clear_tape_by_person

        Delete Events Collected on Specific Person  # noqa: E501
        """
        pass

    def test_data_sink(self):
        """Test case for data_sink

        Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications  # noqa: E501
        """
        pass

    def test_data_sink_get(self):
        """Test case for data_sink_get

        Data sink accepts events that describe what occurred - when - by whom on every interaction across touchpoints and applications  # noqa: E501
        """
        pass

    def test_identities(self):
        """Test case for identities

        Journeys are built around a concept of Identity. An identity shapes how Journey is connected together. Get Identity by Id  # noqa: E501
        """
        pass

    def test_identities_alias(self):
        """Test case for identities_alias

        Tie multiple duplicate Identities together to a unique single individual nondestructively (i.e soft merge) without modifying the Tape  # noqa: E501
        """
        pass

    def test_identities_delete(self):
        """Test case for identities_delete

        Delete a Identity  # noqa: E501
        """
        pass

    def test_journeys(self):
        """Test case for journeys

        The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums  # noqa: E501
        """
        pass

    def test_journeys_by_person(self):
        """Test case for journeys_by_person

        The Tape holds running stream of customer journey events that arrive onto Data Sink from all channels - across mediums  # noqa: E501
        """
        pass

    def test_keys(self):
        """Test case for keys

        Create or Rotate or Delete a Specific Key  # noqa: E501
        """
        pass

    def test_keys_delete(self):
        """Test case for keys_delete

        CJaaS APIs are designed to be accessed with Shared Access Signature(SAS) to resources without transmitting any actual sensitive keys(hello! API Keys) or even exchanging a password for a proxy such as oAuth bearer  # noqa: E501
        """
        pass

    def test_keys_list(self):
        """Test case for keys_list

        List All SAS Keys  # noqa: E501
        """
        pass

    def test_online_orchestration_trigger(self):
        """Test case for online_orchestration_trigger

        Trigger a Online Orchestration such as Webex Walkin or Display Offer Or Chat Bot to intercept and modify your Customer's Journey Midway  # noqa: E501
        """
        pass

    def test_profile_builder(self):
        """Test case for profile_builder

        A Profile is a bespoke view of a customer's journey  # noqa: E501
        """
        pass

    def test_real_time_sse(self):
        """Test case for real_time_sse

        Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination  # noqa: E501
        """
        pass

    def test_real_time_sse_person(self):
        """Test case for real_time_sse_person

        Real-time streaming enables API consumers to listen for events as it arrives part of the Journey, these may be transformed, value added / enriched and ready to be consumed or forwarded to an another destination  # noqa: E501
        """
        pass

    def test_settings(self):
        """Test case for settings

        API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints  # noqa: E501
        """
        pass

    def test_update_settings(self):
        """Test case for update_settings

        API consumers can fully manage their Journey/CDP capabilities and settings using the Account Management endpoints  # noqa: E501
        """
        pass

    def test_webex_walkin_sse(self):
        """Test case for webex_walkin_sse

        SSE Channel for Webex Walkin Orchestration to Modify Journeys Midway  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()